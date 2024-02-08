'use server'

import { connectToDatabase } from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";

import type { NextRequest } from "next/server";
import type { User } from "@/app/interfaces/users";

export async function POST(req: NextRequest) {

	const data = await req.json();
	const { email, password } = data as User;

	if (
		!email ||
		!email.includes("@") ||
		!password ||
		password.trim().length < 7
	) {
		return new Response('Invalid input - password should also be at least 7 characters long.', { status: 422 });
	}

	const client = await connectToDatabase();
	const db = client.db();

	//check if user already exists
	const existingUser = await db.collection("users").findOne({email: email});
	
	if (existingUser) {
		client.close();
		return new Response('User exists already!', { status: 422 });
	}

	const hashedPassword = await hashPassword(password);
	const result = await db.collection("users").insertOne({
		email: email,
		password: hashedPassword,
	});
	console.log(result);
	client.close();
	return new Response('Created user!', { status: 201 });
}
import { connectToDatabase } from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";

import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "@/app/interfaces/users";

interface ReturnDataType {
	message: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReturnDataType>
) {

	if (req.method !== "POST") {
		return;
	}

	const data = req.body;
	const { email, password } = data as User;

	if (
		!email ||
		!email.includes("@") ||
		!password ||
		password.trim().length < 7
	) {
		res.status(422).json({
			message:
				"Invalid input - password should also be at least 7 characters long.",
		});
		return;
	}

	const client = await connectToDatabase();
	const db = client.db();
	const hashedPassword = await hashPassword(password);
	const result = await db.collection("users").insertOne({
		email: email,
		password: hashedPassword,
	});
	client.close();
	res.status(201).json({ message: "Created user!" });
}

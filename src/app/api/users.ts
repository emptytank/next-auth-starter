'use server'

import { User } from "@/app/interfaces/users";

export async function createUser(User: User) {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		body: JSON.stringify(User),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message || "Something went wrong");
	}
	return data;
}
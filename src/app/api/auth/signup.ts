import type { User } from "@/app/interfaces/users";

export async function createUser(user: User) {

	const response = await fetch("http://localhost:3000/api/auth/", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage || "Something went wrong!");
	}
	return await response;
}

"use client";

import { useState, useRef } from "react";
import { createUser } from "@/app/api/auth/signup";
import type { User } from "@/app/interfaces/users";
import classes from "@/app/components/auth/auth-form.module.css";

export default function AuthForm() {

	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const [isLogin, setIsLogin] = useState(true);

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (emailInputRef.current && passwordInputRef.current) {
			const enteredEmail = emailInputRef.current.value;
			const enteredPassword = passwordInputRef.current.value;
			const enteredUser: User = {
				email: enteredEmail,
				password: enteredPassword,
			};

			// optional: Add more validation

			if (isLogin) {
				// log user in
			} else {
				try {
					const result = await createUser(enteredUser);
					console.log(result);
				} catch (error) {
					console.log(error);
				}
			}
		}
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign-up"}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input type="email" id="email" required ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						required
						ref={passwordInputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button>{isLogin ? "Login" : "Create Account"}</button>
					<button
						type="button"
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? "Create new account" : "Login with existing account"}
					</button>
				</div>
			</form>
		</section>
	);
}

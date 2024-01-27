import { useState } from 'react';
import classes from '@/app/components/auth/auth-form.module.css';

export default function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign-up"}</h1>
            <form>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className={classes.action}>
                    <button>{isLogin ? "Login" : "Create Account"}</button>
                    <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
                        {isLogin ? "Create new account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    )


}
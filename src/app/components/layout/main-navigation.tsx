import Link from "next/link";

import classes from "@/app/components/layout/main-navigation.module.css";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Next Auth</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/auth">Login</Link>
                    </li>
                    <li>
                        <Link href="profile">Profile</Link>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
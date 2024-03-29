import classes from "@/app/components/profile/profile-form.module.css";

export default function ProfileForm() {
	return (
		<form className={classes.form}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" />
			</div>
			<div className={classes.control}>
				<label htmlFor="old-password">Old Password</label>
				<input type="password" id="old-password" />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
}

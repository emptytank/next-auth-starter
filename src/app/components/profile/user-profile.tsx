import ProfileForm from "@/app/components/profile/profile-form";
import classes from "@/app/components/profile/user-profile.module.css";

export default function UserProfile() {
	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	);
}

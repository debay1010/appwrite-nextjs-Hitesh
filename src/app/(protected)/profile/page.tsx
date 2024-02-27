import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";

const ProfilePage = () => {
	return (
		<div className="flex flex-wrap w-full mx-auto py-8 gap-y-6 max-w-xl">
			<h1 className="flex gap-x-4 items-center w-full">
				<Link href="../">
					<span className=" inline-flex items-center justify-center rounded-xl w-10 h-10 bg-gray-200/70 hover:bg-gray-100">
						&lt;
					</span>
				</Link>
				<span>Account</span>
			</h1>
			<ProfileCard />
		</div>
	);
};
export default ProfilePage;

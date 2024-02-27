"use client";
import appwriteService from "@/appwrite/config";
import React, { useState, useEffect } from "react";
import Avartar from "./Avartar";
import { Models } from "appwrite";
import Link from "next/link";

const ProfileCard = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);

	useEffect(() => {
		async () => {
			const userData = await appwriteService.getCurrentUser();
			if (userData) {
				setUser(userData);
			}
		};
	}, []);
	return (
		user && (
			<div className="flex flex-wrap gap-y-6">
				<div className="flex items-center gap-x-4 w-full">
					<div className=" shrink-0 w-20">
						<Avartar img="https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/" />
					</div>
					<div className="relative">
						<p className="text-xl font-bold mb-1 w-full">
							{user.name}
						</p>
						<div className="text-[12px] rounded-md inline-block p-0.5 bg-gradient-to-tr from-primary to-secondary">
							<button className="px-2 rounded-md text-white font-bold">
								FRRE
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap rounded-xl bg-gray-200/70 gap-y-4 p-8">
					<div className="relative w-full">
						<p className="text-sm text-gray-700">Display Name</p>
						<p className=" font-semibold">{user.name}</p>
					</div>
					<div className="relative w-full">
						<p className="text-sm text-gray-700">Email ID</p>
						<p className=" font-semibold">{user.email}</p>
					</div>
					<div className="relative w-full">
						<p className="text-sm text-gray-700">
							Telephone Number{" "}
						</p>
						<p className=" font-semibold">234-445-6657</p>
					</div>
					<div className="relative w-full">
						<p className="text-sm text-gray-700">Password </p>
						<p className=" font-semibold">**********</p>
					</div>
				</div>
				<div className="flex w-full justify-center">
					<Link
						href="/logout"
						className="bg-gray-200/70 rounded-xl inline-block px-6 p6-3 hover:bg-gray-100 duration-150"
					>
						Logout
					</Link>
				</div>
			</div>
		)
	);
};

export default ProfileCard;

"use client";
import useAuth from "@/context/useAuth";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";
import React from "react";

const Home = () => {
	const { authStatus } = useAuth();
	return (
		<div>
			<div className="">
				<div className="">
					<div className="">
						<div className="w-full max-w-[100px]">
							<img src="/favicon.ico" alt="icon" />
						</div>
						<div className="w-full">
							<h1 className="font0bold text-3xl mb-3">
								NextJS 14 Authrnticaation with
								<span className="text-primary">Appwrite</span>
							</h1>
							<p className="text-black/60">
								Integrate secure user authentication into your
								Nextjs web application using Appwrite, an open
								source backeend server. Follow along as we
								demonstrate step-by-step process of implementing
								and setting up authentication functionality,
								ensuring a high level security for your users
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-end sm:w-1/2 px-2">
					{authStatus ? (
						<div className="max-w-md">
							<ProfileCard />
						</div>
					) : (
						<Login />
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;

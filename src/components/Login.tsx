"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Login = () => {
	const router = useRouter();
	const { setAuthStatus } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const login = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const session = await appwriteService.login(formData);

			if (session) {
				setAuthStatus: true;
				router.push("/profile");
			}
		} catch (error: any) {
			setError(error.message);
		}
	};

	return (
		<div className="flex items-center justify-center">
			<div
				className={`w-full mx-auto max-w-lg bg-gray-200/50 rounded-xl p-10`}
			>
				<div className="mb-2 flex justify-center">
					<span className=" inline-block w-full max-w-[60px]">
						<img src="/favicon" alt="logo" />
					</span>
				</div>
				<h2 className="text-center text-black font-bold text-2xl leading-tight">
					Login
				</h2>
				<p className="mt-2 text-base text-gray-600 text-center">
					You don't have an account? &nbsp;
					<Link
						href="/signup"
						className=" font-medium text-primary transition-all duration-200 hover:underline"
					>
						Sign Up
					</Link>
				</p>
				{error && (
					<p className="mt-8 text-red-500 text-center">{error}</p>
				)}
				<form onSubmit={login} className="mt-8">
					<div className="space-y-5">
						<div className="">
							<label
								htmlFor="email"
								className="text-base font-medium text-gray-900"
							>
								Email
							</label>
							<div className="mt-2">
								<input
									className="flex h-10 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus: outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed "
									type="text"
									placeholder="E-mail"
									id="email"
									value={formData.email}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											email: e.target.value,
										}))
									}
									required
								/>
							</div>
						</div>

						<div className="">
							<label
								htmlFor="password"
								className="text-base font-medium text-gray-900"
							>
								Password
							</label>
							<div className="mt-2">
								<input
									className="flex h-10 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus: outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed "
									type="text"
									placeholder="Password"
									id="password"
									value={formData.password}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											password: e.target.value,
										}))
									}
									required
								/>
							</div>
						</div>

						<div className="">
							<button
								type="button"
								className=" inline-flex items-center justify-center w-full bg-primary rounded-md font-semibold px-3.5 py-2.5 leading-7 hover:bg-primary/80 text-white "
							>
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

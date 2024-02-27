"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Signup = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		name: "",
	});

	const [error, setError] = useState("");

	const { setAuthStatus } = useAuth();

	const create = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const userData = await appwriteService.createUserAccount(formData);

			if (userData) {
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
					Sign up to create Acount
				</h2>
				<p className="mt-2 text-base text-gray-600 text-center">
					Already have an account? &nbsp;
					<Link
						href="/login"
						className=" font-medium text-primary transition-all duration-200 hover:underline"
					>
						Sign In
					</Link>
				</p>
				{error && (
					<p className="mt-8 text-red-500 text-center">{error}</p>
				)}
				<form onSubmit={create} className="mt-8">
					<div className="space-y-5">
						<div className="">
							<label
								htmlFor="name"
								className="text-base font-medium text-gray-900"
							>
								Full Name
							</label>
							<div className="mt-2">
								<input
									className="flex h-10 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus: outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed "
									type="text"
									placeholder="Full Name"
									id="name"
									value={formData.name}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											name: e.target.value,
										}))
									}
									required
								/>
							</div>
						</div>

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
								Create Account
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;

import useAuth from "@/context/useAuth";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const menuItems = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	const { authStatus } = useAuth();
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link
						href="https://flowbite.com"
						className="flex items-center  "
					>
						<Logo />
					</Link>

					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{menuItems.map((item, i) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
										aria-current="page"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="hidden space-x-2 lg:block">
						<Link
							href={authStatus ? "/profile" : "/signup"}
							className="rounded-md text-sm px-3 py-2 font-semibold bg-transparent text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary  "
						>
							{authStatus ? "Profile" : "Signup"}
						</Link>
						<Link
							href={authStatus ? "/logout" : "/login"}
							className="rounded-md text-sm px-3 py-2 font-semibold bg-transparent text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-sm  "
						>
							{authStatus ? "Logout" : "Login"}
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

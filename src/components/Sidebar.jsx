import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sticky top-0 flex h-screen w-[280px] shrink-0 flex-col justify-between bg-white">
			<div className="px-6 py-8 text-center">
				<Link to={"/"} className="block p-2 text-center">
					<img src="/logo.svg" alt="" className="mx-auto h-7" />
				</Link>
			</div>

			<ul className="flex-1">
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
				<li>
					<Link to={"/products"} className="flex items-center gap-3 px-8 py-2 text-sm text-gray-900">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="h-4 w-4">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M1.333 11.333 8 14.667l6.667-3.334M1.333 8 8 11.333 14.667 8M8 1.333 1.333 4.667 8 8l6.667-3.333L8 1.333Z"
							/>
						</svg>
						<span>Products</span>
					</Link>
				</li>
			</ul>

			<div className="mt-7 px-4 pb-4">
				<div className="rounded-xl bg-blue-600/10 px-4 pb-4 text-center">
					<div className="relative -top-7 mx-auto -mb-7 grid h-14 w-14 place-content-center rounded-full bg-white text-blue-600 shadow-md">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="h-8 w-8">
							<path
								fill="currentColor"
								d="M16 3a13 13 0 1 0 13 13A13.025 13.025 0 0 0 16 3Zm0 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-6.113V18a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1 2.5 2.5 0 1 0-2.5-2.5 1 1 0 0 1-2 0 4.5 4.5 0 1 1 5.5 4.387Z"
							/>
						</svg>
					</div>
					<h5 className="mt-4 text-lg font-semibold text-gray-900">Help Center</h5>
					<p className="mt-4 text-xs text-gray-500">
						Getting trouble on Simplebook? Reach out and solve your problem
					</p>
					<Link className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
						Consult Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

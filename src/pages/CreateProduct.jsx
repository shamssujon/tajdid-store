import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
	return (
		<div className="">
			<div className="flex flex-col items-center justify-between gap-6 p-10 md:flex-row">
				<div className="">
					<h5 className="text-lg font-semibold text-gray-900">Create Product</h5>
					<p className="text-sm text-gray-600">Upload your product photo and details here.</p>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-lg border bg-white px-6  py-3 text-center text-base font-medium text-slate-950">
						Cancel
					</button>
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
						Create
					</button>
				</div>
			</div>

			<div className="px-10">
				<form action="">
					<hr />
					<div className="grid max-w-4xl grid-cols-1 gap-2 py-5 lg:grid-cols-3 lg:gap-6">
						<label htmlFor="title" className="text-sm font-medium text-gray-700">
							Title
						</label>
						<div className="lg:col-span-2">
							<input
								name="title"
								id="title"
								type="text"
								placeholder="Product Title"
								className="block w-full rounded-lg border bg-white px-4 py-2.5 text-base text-gray-900 outline-0 transition placeholder:text-sm focus:ring"
							/>
						</div>
					</div>
					<hr />
					<div className="grid max-w-4xl grid-cols-1 gap-2 py-5 lg:grid-cols-3 lg:gap-6">
						<label htmlFor="price" className="text-sm font-medium text-gray-700">
							Price
						</label>
						<div className="lg:col-span-2">
							<div className="flex">
								<span className="-mr-px grid shrink-0 place-content-center rounded-s-lg border bg-white px-4 font-medium">
									$
								</span>
								<input
									name="price"
									id="price"
									type="text"
									placeholder="Product Price"
									className="block w-full rounded-e-lg border bg-white px-4 py-2.5 text-base text-gray-900 outline-0 transition placeholder:text-sm focus:ring"
								/>
							</div>
						</div>
					</div>
					<hr />
					<div className="grid max-w-4xl grid-cols-1 gap-2 py-5 lg:grid-cols-3 lg:gap-6">
						<div className="">
							<label htmlFor="photo" className="text-sm font-medium text-gray-700">
								Product photo
							</label>
							<p className="text-xs text-gray-600">This will be displayed on your product</p>
						</div>
						<div className="lg:col-span-2">
							<div className="flex flex-col gap-5 md:flex-row">
								<div className="h-full w-28 shrink-0 rounded-lg border bg-white p-2 lg:h-44 lg:w-44">
									<img src="/product.png" alt="" className="h-full w-full object-contain" />
								</div>

								<div className="relative w-full">
									<input
										id="photo"
										type="file"
										className="peer absolute inset-0 -z-10 h-full w-full opacity-0"
									/>
									<label
										htmlFor="photo"
										className="grid h-full cursor-pointer place-content-center gap-1 rounded-lg border bg-white p-5 text-center transition peer-focus:ring">
										<div className="mx-auto mb-1 inline-grid h-10 w-10 place-content-center rounded-full bg-gray-100">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 21 21"
												className="h-5 w-5 text-gray-600">
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.667"
													d="M7.167 13.833 10.5 10.5m0 0 3.333 3.333M10.5 10.5V18m6.667-3.548a4.583 4.583 0 0 0-2.917-8.12.516.516 0 0 1-.445-.25 6.25 6.25 0 1 0-9.816 7.58"
												/>
											</svg>
										</div>
										<p className="text-sm text-gray-600">
											<span className="font-semibold text-blue-700">Click to upload</span> or drag
											and drop
										</p>
										<p className="text-xs text-gray-600">SVG, PNG, JPG or GIF (max. 800x400px)</p>
									</label>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="grid max-w-4xl grid-cols-1 gap-2 py-5 lg:grid-cols-3 lg:gap-6">
						<div className="">
							<label htmlFor="description" className="text-sm font-medium text-gray-700">
								Description
							</label>
							<p className="text-xs text-gray-600">Write a short introduction.</p>
						</div>
						<div className="lg:col-span-2">
							<textarea
								name="description"
								id="description"
								placeholder="Write something about your products..."
								className="block w-full rounded-lg border bg-white px-4 py-2.5 text-base text-gray-900 outline-0 transition placeholder:text-sm focus:ring"
								rows="4"></textarea>
							<p className="mt-2 text-sm text-gray-500">275 charecters left</p>
						</div>
					</div>
					<hr />
				</form>
			</div>
		</div>
	);
};

export default AddProduct;

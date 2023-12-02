const ProductCard = () => {
	return (
		<div className="rounded-md border bg-white">
			<div className="aspect-video overflow-hidden p-6">
				<img src="/product.png" alt="" className="h-full w-full object-contain" />
			</div>
			<hr />
			<div className="p-6">
				<div className="flex items-start justify-between gap-4">
					<div className="">
						<h4 className="text-lg font-semibold text-gray-950">$7.95</h4>

						<div className="flex items-center gap-2">
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 16"
									className="h-4 w-4 text-orange-400">
									<path
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
										d="m8.397 12.558 4.798 2.876-1.273-5.421 4.238-3.648-5.581-.47L8.397.78 6.216 5.895l-5.582.47 4.239 3.648L3.6 15.434l4.797-2.876Z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 16"
									className="h-4 w-4 text-orange-400">
									<path
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
										d="m8.397 12.558 4.798 2.876-1.273-5.421 4.238-3.648-5.581-.47L8.397.78 6.216 5.895l-5.582.47 4.239 3.648L3.6 15.434l4.797-2.876Z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 16"
									className="h-4 w-4 text-orange-400">
									<path
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
										d="m8.397 12.558 4.798 2.876-1.273-5.421 4.238-3.648-5.581-.47L8.397.78 6.216 5.895l-5.582.47 4.239 3.648L3.6 15.434l4.797-2.876Z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 16"
									className="h-4 w-4 text-orange-400">
									<path
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
										d="m8.397 12.558 4.798 2.876-1.273-5.421 4.238-3.648-5.581-.47L8.397.78 6.216 5.895l-5.582.47 4.239 3.648L3.6 15.434l4.797-2.876Z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 17 16"
									className="h-4 w-4 text-orange-400">
									<path
										fill="currentColor"
										fillRule="evenodd"
										clipRule="evenodd"
										d="m8.397 12.558 4.798 2.876-1.273-5.421 4.238-3.648-5.581-.47L8.397.78 6.216 5.895l-5.582.47 4.239 3.648L3.6 15.434l4.797-2.876Z"
									/>
								</svg>
							</div>
							<p className="text-base text-orange-400">5.9</p>
						</div>
					</div>
					<button className="inline-grid place-content-center rounded-md border p-2 text-rose-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" className="h-6 w-6">
							<path
								fill="currentColor"
								d="M9.079 4.857H8.89a.188.188 0 0 0 .188-.187v.187h7.125V4.67c0 .103.084.187.187.187h-.187v1.688h1.687V4.67c0-.827-.672-1.5-1.5-1.5h-7.5c-.827 0-1.5.673-1.5 1.5v1.875h1.69V4.857ZM20.89 6.545H4.39a.75.75 0 0 0-.75.75v.75c0 .103.084.187.188.187h1.415l.58 12.258a1.5 1.5 0 0 0 1.497 1.43h10.64c.802 0 1.46-.628 1.498-1.43l.579-12.258h1.416a.188.188 0 0 0 .187-.187v-.75a.75.75 0 0 0-.75-.75Zm-3.11 13.688H7.501l-.567-12h11.414l-.567 12Z"
							/>
						</svg>
					</button>
				</div>
				<p className="mt-2 text-gray-600">Opna Women's Short Sleeve Moisture</p>
			</div>
		</div>
	);
};

export default ProductCard;

import React from "react";

const DeleteConfirmationDialog = (product) => {
	console.log(product.product.product.id);

	return (
		<div className="fixed inset-0 z-10 flex h-full w-full flex-col items-center justify-center">
			<div
				onClick={() => product.setOpenDialog(false)}
				className="fixed inset-0 -z-10 h-full w-full bg-gray-600/70 backdrop-blur-sm"></div>

			<div className="w-full max-w-sm rounded-xl bg-white p-8 shadow">
				<div className="flex justify-between">
					<h4 className="text-lg font-semibold text-gray-900">Delete Product</h4>
					<button onClick={() => product.setOpenDialog(false)} className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-6 w-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<p className="mt-4 text-sm text-gray-600">
					Are you sure you want to delete <strong>{product.product.product.title}</strong> from your lists?
				</p>

				<div className="mt-8 grid grid-cols-2 gap-3">
					<button
						onClick={() => {
							product.product.handleDeleteProduct(product.product.product.id);
							product.setOpenDialog(false);
						}}
						className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-6 py-3 text-center text-base font-medium text-white transition hover:bg-rose-700 md:order-2">
						Delete
					</button>
					<button
						onClick={() => product.setOpenDialog(false)}
						className="inline-flex items-center justify-center rounded-lg border bg-transparent px-6 py-3 text-center text-base font-medium text-gray-900 transition hover:bg-gray-100">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmationDialog;

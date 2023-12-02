import ProductCard from "../components/ProductCard";

const Products = () => {
	return (
		<div>
			<div className="flex items-center justify-between gap-6 p-10">
				<h2 className="text-3xl font-semibold text-gray-900">Products</h2>
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
					Create New
				</button>
			</div>

			<div className="grid grid-cols-3 gap-5 px-10">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default Products;

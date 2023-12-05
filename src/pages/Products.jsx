import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
	const { status, error, data } = useQuery("productsData", () =>
		fetch("https://fakestoreapi.com/products/").then((res) => res.json()),
	);

	// console.log(data);

	return (
		<div>
			<div className="flex items-center justify-between gap-6 p-10">
				<h2 className="text-3xl font-semibold text-gray-900">Products</h2>
				<Link
					to={"/products/create-product"}
					className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-medium text-white">
					Create New
				</Link>
			</div>

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 px-10">
				{status === "loading" ? (
					"loading"
				) : status === "error" ? (
					<span>{error.message}</span>
				) : (
					<>
						{data.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Products;

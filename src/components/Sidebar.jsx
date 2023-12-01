import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="sticky top-0 h-screen w-80 shrink-0 border border-rose-300">
			<div className="border border-green-500">
				<Link to={"/"}>Home</Link>
				<Link to={"/products"}>Products</Link>
			</div>
		</aside>
	);
};

export default Sidebar;

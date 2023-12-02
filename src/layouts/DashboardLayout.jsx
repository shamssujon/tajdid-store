import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
	return (
		<div className="flex items-start bg-gray-100">
			<Sidebar />
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;

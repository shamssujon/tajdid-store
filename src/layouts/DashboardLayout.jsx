import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
	return (
		<div className="flex items-start">
			<Sidebar />
			<main className="flex-1 border">
				<Outlet />
			</main>
		</div>
	);
};

export default DashboardLayout;

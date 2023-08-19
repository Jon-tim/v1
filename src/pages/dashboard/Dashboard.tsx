import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<>
			<nav>navigation</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Dashboard;

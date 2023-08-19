import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ErrorPage from "./pages/Error.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Notes from "./pages/dashboard/Notes.tsx";
import Favourite from "./pages/dashboard/Favourite.tsx";
import Analytics from "./pages/dashboard/Analytics.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/notes",
				element: <Notes />,
			},
			{
				path: "/dashboard/favourites",
				element: <Favourite />,
			},
			{
				path: "/dashboard/analytics",
				element: <Analytics />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

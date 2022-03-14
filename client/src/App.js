import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Drinks from "pages/Drinks";
import Example from "pages/Example";
import Home from "pages/Home";
import Details from "pages/Details";
import { useRoutes } from "react-router-dom";

export default function App() {
	return useRoutes([
		{
			path: "/",
			element: <PublicLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "cart",
					element: <Cart />,
				},
				{
					path: 'drinks',
					element: <Drinks />,
				},
				{
					path: 'details',
					element: <Details />,
				},
				{
					path: 'example',
					element: <Example />,
				},
			]
		},
	]);
}


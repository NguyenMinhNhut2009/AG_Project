import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Drinks from "pages/Drinks";
import Example from "pages/Example";
import Home from "pages/Home";
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
					path: 'example',
					element: <Example />,
				},
			]
		},
	]);
}


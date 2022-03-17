import PublicLayout from "layouts/PublicLayout";
import Cart from "pages/Cart";
import Details from "pages/Detail";
import Drinks from "pages/Drinks";
import Example from "pages/Example";
import Home from "pages/Home";
import Details from "pages/Details";
import { useRoutes } from "react-router-dom";

export default function App() {
<<<<<<< HEAD
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
=======
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
                    path: "drinks",
                    children: [
                        {
                            index: true,
                            element: <Drinks />,
                        },
                        {
                            path: "/drinks/:id",
                            element: <Details />,
                        },
                    ],
                },
                {
                    path: "example",
                    element: <Example />,
                },
            ],
        },
    ]);
>>>>>>> 06778462eb41b928df74e9682eb4879e52906a34
}

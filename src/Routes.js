import Home from "./Home";

export default function Routes() {
	return [
		{
			path: "/",
			component: Home,
			exact: true
		},
	]
}
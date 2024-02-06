import { Link, Outlet } from 'react-router-dom';

export function NotFound() {
	return (
		<>
			<h1>{"Sorry, we couldn't find that page."}</h1>
			<Link to='/'>Go back home</Link>
			{/* TODO: make it pretty */}
			<Outlet />
		</>
	);
}

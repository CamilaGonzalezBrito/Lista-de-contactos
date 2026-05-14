import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light px-5">

			<h3 className="m-0">
				 Contact List
			</h3>

			<Link to="/add-contact">
				<button className="btn btn-success">
					Add new contact
				</button>
			</Link>

		</nav>
	);
};
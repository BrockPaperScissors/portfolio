import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<header className="page-header">
				<Link to="/">
					<h1 className="page-title">Michael Brock</h1>
				</Link>
				<div className="links-nav-container">
					<nav className="links-nav">
						<ul className="links">
							<Link to="">
								<li className="header-link">About Me</li>
							</Link>
							<Link to="">
								<li className="header-link">Projects</li>
							</Link>

							<a
								href="https://github.com/BrockPaperScissors"
								target="_blank"
								id="link-git"
							>
								<li className="header-link">Git Hub</li>
							</a>

							<Link to="">
								<li className="header-link">Resume</li>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

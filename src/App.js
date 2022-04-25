import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
	return (
		<div className="page-container">
			<header className="page-header">
				<Link to="/">
					<h1 className="page-title">Michael Brock</h1>
				</Link>
				<div className="links-nav-container">
					<nav className="links-nav">
						<ul className="links">
							<Link to="/aboutme">
								<li className="header-link">About Me</li>
							</Link>
							<Link to="/projects">
								<li className="header-link">Projects</li>
							</Link>

							<a href="https://github.com/BrockPaperScissors" id="link-git">
								<li className="header-link">Git Hub</li>
							</a>

							<Link to="/resume">
								<li className="header-link">Resume</li>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutme" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

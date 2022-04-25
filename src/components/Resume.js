import "./css/resume.css";

export default function Resume() {
	return (
		<div className="resume-container">
			{/* <header className="resume-header">
				<h1 className="resume-name under-line">Michael Brock</h1>
				<ul className="resume-contacts">
					<a href="https://www.linkedin.com/in/michaelbrock91/">
						<li className="resume-link">LinkedIn</li>
					</a>
					<a href="https://github.com/BrockPaperScissors">
						<li className="resume-link">GitHub</li>
					</a>

					<li>Email me at: michaeljbrock91@gmail.com</li>
				</ul>
			</header> */}
			<main className="resume-main">
				<div className="skills-container">
					<h2 className="under-line">Skills:</h2>
					<div className="skills">
						<div>
							<h3 className="skill">Languages:</h3>
							<p className="skill-disclaimer">
								-Descending order of proficiency-
							</p>
							<ul className="skill-list">
								<li>JavaScript </li>
								<li>Python </li>
								<li>C# </li>
							</ul>
						</div>
						<div>
							<h3 className="skill">Libraries/Frameworks/Databases:</h3>
							<ul className="skill-list">
								<li>React.js</li>
								<li>Node.js</li>
								<li>Django</li>
								<li>Mongoose/MongoDB</li>
								<li>PostgreSQL</li>
							</ul>
						</div>

						<div>
							<h3 className="skill">Workflow/Tools:</h3>
							<div className="skill-tools">
								<ul className="skill-list">
									<li>Git</li>
									<li>Agile</li>
									<li>Jira</li>
									<li>Trello</li>
									<li>Slack</li>
									<li>Zoom</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="resume-ejp">
					<div className="education-container">
						<h2 className="education-title under-line">Education:</h2>
						<h3 className="education-credit">
							General Assembly: 12-week Software Engineering Immersive -
							Completed April 2022.
						</h3>
						<ul className="res-ul">
							<li className="res-li">
								Acquired the ability to develop full-stack MERN web
								applications.
							</li>
							<li className="res-li">
								Completed 420 hours of in class work and lectures.
							</li>
							<li className="res-li">
								Developed three unique solo projects over the entire course.
							</li>
							<li className="res-li">
								Worked with a group of 3 other people on a fourth project over
								the span of three days.
							</li>
						</ul>
					</div>
					<div>
						<h2 className="under-line">Job Experience:</h2>
						<h3 className="je">
							Pizza Luce - Delivery Driver - June 2014 to May 2021{" "}
						</h3>
						<ul className="res-ul">
							<li className="res-li">
								Honed the soft skills found in customer service roles over the
								course of 7 years.
							</li>
							<li className="res-li">
								Focused on meeting the customers needs and expectations.
							</li>
							<li className="res-li">
								Worked in an intense, high-volume environment.
							</li>
							<li className="res-li">
								Operated under dynamic conditions to meet the goals of a team.
							</li>
						</ul>
					</div>
					<div>
						<h2 className="under-line">Projects:</h2>
						<h3 className="je">Bad Interview - April 2022</h3>
						<ul className="res-ul">
							<li className="res-li">
								A proof of concept tool designed for people to practice their
								interview skills.
							</li>
							<li className="res-li">
								Signifies my first independent full-stack project.
							</li>
							<li className="res-li">
								Encorporated MongoDB, Express.js, React.js, and Node.js
							</li>
							<li className="res-li">
								Created an API with CRUD functionality, and made an application
								that interacts with that API. Users can submit questions, and
								create sessions to answer a selected amount of randomly chosen
								questions.
							</li>
						</ul>
						<h3 className="je">Team Deets - March 2022</h3>
						<ul className="res-ul">
							<li className="res-li">
								Developed for League of Legends players to review the stats of
								all 10 players in their recent matches.
							</li>
							<li className="res-li">
								Interacted with multiple third-party APIs and dealt with
								asynchronous fetchings.
							</li>
							<li className="res-li">
								Signifies my first application using API functionality.
							</li>
							<li className="res-li">
								Really dives into the reusability of React.js components.
							</li>
						</ul>
						<h3 className="je">Book Roulette - March 2022</h3>
						<ul className="res-ul">
							<li className="res-li">
								A book recommendation app that will provide a recommendation at
								random based off a user-selected genre.
							</li>
							<li className="res-li">
								Group project worked on over the course of three days.
							</li>
							<li className="res-li">
								Created using MongoDB, Express.js, React.js and Node.js.
							</li>
							<li className="res-li">
								Personal contributions: heavily to the planning stages and
								wireframing. Responsible for several front end React components,
								creating the toggled navigation bar, and general page layout.
							</li>
						</ul>
					</div>
				</div>
			</main>
			<footer className="app-footer">
				<nav className="footer-nav">
					<p className="footer-p">Contact Me:</p>
					<ul className="footer-ul">
						<a href="https://www.linkedin.com/in/michaelbrock91/">
							<li className="resume-link">LinkedIn</li>
						</a>
						<li className="footer-li">Email: michaeljbrock91@gmail.com</li>
						<a href="https://docs.google.com/document/d/1k7w94uHyl9i0up2l_yiJhUJl0uscsgg4jCasaKdhK6Q/edit?usp=sharing">
							<li className="resume-link">Download Resume</li>
						</a>
					</ul>
				</nav>
			</footer>
		</div>
	);
}

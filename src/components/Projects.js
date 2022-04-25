import "./css/project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeftLong,
	faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Projects() {
	const [projectIndex, setProjectIndex] = useState(0);
	const arrowPrev = <FontAwesomeIcon icon={faArrowLeftLong} />;
	const arrowNext = <FontAwesomeIcon icon={faArrowRightLong} />;
	const projArray = [
		{
			projectName: "Book Roulette",
			projectIndex: 1,
			url: "https://book-roulette.netlify.app/",
			previewIMG: "https://i.imgur.com/YRbIFR6.png",
			date: "April 2022",
			about:
				"Book Roulette is a team based project with the goal of creating a book suggestion generator. Users can select their favorite genre from a list and be recommended a random book from our database! I contributed heavily in the design and planning process of the entire project. I also contributed with the construction of several of the front-end React components, along with the design and implementation of the home page, navigation bar and the listing of books by genre.",
		},
		{
			projectName: "Team Deets",
			projectIndex: 2,
			url: "https://teamdeets.netlify.app/",
			previewIMG: "https://i.imgur.com/UpwxVm9.png",
			date: "March 2022",
			about:
				"Team Deets was my second project, fueled by my love for the game League of Legends. I wanted a tool to review the details of all ten players in my recent matches. I added the functionality for other players to search their match history using their own summoner names! This was my first project utilizing third-party APIs and working with the data inside of React.js. ",
		},
		// {
		// 	projectName: "Bad Interview",
		// 	projectIndex: 3,
		// 	url: "https://bad-interview.vercel.app/",
		// 	previewIMG:
		// 		"https://images.unsplash.com/photo-1650400716131-12a410e12975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80",
		// 	date: "",
		// 	about:
		// 		"Bad Interview was my final project during my software engineering course at General Assembly. It is an interview preparation tool meant to improve your confidence before going into an interview. This was my first full-stack MERN application where I created both front and back ends. I deployed an API and then populated it with some interview questions, then interacted with said API using my React Front-end. ",
		// },
		{
			projectName: "Baby Gandalph",
			projectIndex: 4,
			url: "https://brockpaperscissors.github.io/BabyGandalph/",
			previewIMG: "https://i.imgur.com/LmNLr4c.png",
			date: "February 2022",
			about:
				"Baby Gandalph was my very first project. It is a simple clicking game, based off the concept of a 'Tamagotchi' game. The user has to manage fatigue and hunger levels whilst attempting to advance the skills level.",
		},
	];

	function myCarouselNext() {
		if (projectIndex === projArray.length - 1) {
			setProjectIndex(0);
			// console.log(projectIndex, "projectIndex = 0");
		} else {
			setProjectIndex(projectIndex + 1);
			// console.log(projectIndex, "projectIndex = projectIndex + 1");
		}
	}
	function myCarouselPrev() {
		if (projectIndex <= 0) {
			// projectIndex = projArray.length - 1;
			setProjectIndex(projArray.length - 1);
		} else {
			setProjectIndex(projectIndex - 1);
		}
	}

	return (
		<div className="proj-container">
			<div className="car-container">
				<h2 className="proj-title">
					Project: {projArray[projectIndex].projectName} -{" "}
					{projArray[projectIndex].date}
				</h2>
				<a href={projArray[projectIndex].url}>
					<img
						src={projArray[projectIndex].previewIMG}
						alt="preview of the project"
						className="car-img"
					></img>
				</a>
				<div className="btn-container">
					<button className="proj-btn" onClick={myCarouselPrev}>
						{arrowPrev}
					</button>
					<button className="proj-btn next-btn" onClick={myCarouselNext}>
						{arrowNext}
					</button>
				</div>
			</div>

			<section className="side-section about-proj">
				{projArray[projectIndex].about}
			</section>
		</div>
	);
}

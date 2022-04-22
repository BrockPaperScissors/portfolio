import "./css/project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeftLong,
	faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Projects() {
	const [projectIndex, setProjectIndex] = useState(0);
	const arrowPrev = <FontAwesomeIcon icon={faArrowLeftLong} />;
	const arrowNext = <FontAwesomeIcon icon={faArrowRightLong} />;
	const projArray = [
		{
			projectIndex: 1,
			url: "https://github.com/BrockPaperScissors",
			previewIMG:
				"https://images.unsplash.com/photo-1650464187828-d380b8edbc0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			date: "",
		},
		{
			projectIndex: 2,
			url: "https://teamdeets.netlify.app/",
			previewIMG:
				"https://images.unsplash.com/photo-1650435331404-c1340a4c8f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			date: "",
		},
		{
			projectIndex: 3,
			url: "https://bad-interview.vercel.app/",
			previewIMG:
				"https://images.unsplash.com/photo-1650400716131-12a410e12975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=674&q=80",
			date: "",
		},
		{
			projectIndex: 4,
			url: "https://brockpaperscissors.github.io/BabyGandalph/",
			previewIMG:
				"https://images.unsplash.com/photo-1650374472516-de9da0ed5599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			date: "",
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
			projectIndex = projArray.length - 1;
			// console.log(projectIndex, "projectIndex = projArray.length + 1");
		} else {
			projectIndex = projectIndex - 1;
			// console.log(projectIndex, "projectIndex = projectIndex - 1");
		}
		console.log(projArray[projectIndex]);
		// return projectIndex;
		setProjectIndex(projectIndex);
	}

	return (
		<div className="proj-container">
			<button className="proj-btn" onClick={myCarouselPrev}>
				{arrowPrev}
			</button>
			<div className="car-container">
				<p>{projectIndex}</p>
				<p>{projectIndex}</p>
				<h2>{projArray[projectIndex].project}</h2>
				<a href={projArray[projectIndex].url} target={"_blank"}>
					<img
						src={projArray[projectIndex].previewIMG}
						className="car-img"
					></img>
				</a>
			</div>
			<button className="proj-btn" onClick={myCarouselNext}>
				{arrowNext}
			</button>
		</div>
	);
}

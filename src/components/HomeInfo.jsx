import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
	<div className="info-box">
		<p className="font-medium sm:text-x1 text-center">{text}</p>
		<Link to={link} className="neo-brutalism-white neo-btn">
			{btnText}
			<img src={arrow} className="w-4 h-4 object-contain" />
		</Link>
	</div>
);

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I am <span className="font-semibold">Loup</span> 👋
			<br />A Front-end Developer based in Paris, France.
		</h1>
	),
	2: (
		<InfoBox
			text="Engaged in numerous projects, enhancing a broad skill set."
			link="/about"
			btnText={"Learn more"}
		/>
	),
	3: (
		<InfoBox
			text="Achieved numerous projects over the years. Curious about it ?"
			link="/projects"
			btnText={"Visit my portfolio"}
		/>
	),
	4: (
		<InfoBox
			text="Need a project done ? I am available for hire !"
			link="/contact"
			btnText={"Let's talk"}
		/>
	),
};

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;

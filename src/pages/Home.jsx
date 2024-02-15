import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";

import Footer from "../components/Footer";

import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";
import TutorialPopup from "../components/TutorialPopUp";

import tutorialIcon from "../assets/icons/tutorial-icon.svg";

import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	const [showTutorial, setShowTutorial] = useState(false);

	useEffect(() => {
		const hasVisited = localStorage.getItem("hasVisited");
		if (!hasVisited) {
			setShowTutorial(true);
			localStorage.setItem("hasVisited", "true");
		}
	}, []);

	const handleTutorialIconClick = () => {
		setShowTutorial(true);
	};

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	const adjustIslandForScreensSize = () => {
		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		} else {
			screenScale = [1, 1, 1];
		}

		return [screenScale, screenPosition, rotation];
	};

	const adjustPlaneForScreensSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -4, -4];
		}

		return [screenScale, screenPosition];
	};

	const [islandScale, islandPosition, islandRotation] =
		adjustIslandForScreensSize();
	const [planeScale, planePosition] = adjustPlaneForScreensSize();

	return (
		<section className="w-full h-screen relative">
			{showTutorial && (
				<TutorialPopup onClose={() => setShowTutorial(false)} />
			)}

			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? "cursor-grabbing" : "cursor-grab"
				}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={1.5} />
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 5, 10]} intensity={1.5} />
					<spotLight
						position={[0, 50, 10]}
						angle={0.15}
						penumbra={1}
						intensity={2}
					/>
					<hemisphereLight
						skyColor="#b1e1ff"
						groundColor="#000000"
						intensity={1}
					/>
					<Bird />
					<Sky isRotating={isRotating} />
					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
					/>
					<Plane
						isRotating={isRotating}
						scale={planeScale}
						position={planePosition}
						rotation={[0, 20.1, 0]}
					/>
				</Suspense>
			</Canvas>

			<div className="absolute bottom-14 left-10">
				<img
					src={!isPlayingMusic ? soundoff : soundon}
					alt="sound"
					className="w-10 h-10 cursor-pointer object-contain"
					onClick={() => setIsPlayingMusic(!isPlayingMusic)}
				/>
			</div>

			<div className="tutorialButton absolute bottom-14 right-10">
				<img
					src={tutorialIcon}
					alt="Tutorial"
					className="w-10 h-10 cursor-pointer object-contain"
					onClick={handleTutorialIconClick}
				/>
			</div>

			<Footer />
		</section>
	);
};

export default Home;

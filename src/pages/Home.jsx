import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

import Sky from "../models/Sky";
import Island from "../models/Island";

const Home = () => {
	const adjustIslandForScreensSize = () => {
		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];

		if(window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
		}
		else {
			screenScale = [1, 1, 1];
		}

		return [screenScale, screenPosition, rotation]
	}

	const[islandScale, islandPosition, islandRotation] = adjustIslandForScreensSize();

	return (
		<section className="w-full h-screen relative">
			<Canvas
				className="w-full h-screen relative"
				camera={{ near: 0.1, far: 1000 }}>

				<Suspense fallback={<Loader/>}>
					<directionalLight position={[10, 1, 1]} intensity={2}/>
					<ambientLight intensity={0.5}/>
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

					<Sky/>
					<Island
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Home;

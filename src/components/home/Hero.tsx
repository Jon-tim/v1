import { useRef } from "react";
import Footer from "./Footer";
import HeroGrid from "./Hero-Grid";

export default function Hero() {
	const audioRef = useRef<HTMLAudioElement>(null);

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};
	return (
		<section className="mt-12 md:mt-16 flex flex-col gap-10">
			<div className="text-center flex flex-col items-center max-w-2xl mx-auto gap-4">
				<span className="flex items-center gap-2 bg-paleBrown px-4 py-1 rounded-full text-dark">
					<i className="bx bx-info-circle text-paleRed"></i>
					<p className="text-xs font-semibold ">
						currently open for a frontend role
					</p>
				</span>
				<div className="text-center flex flex-col items-center gap-8">
					<h1 className="text-5xl font-bold md:text-6xl">
						front-end
						<br className="min-[490px]:hidden" /> developer
					</h1>
					<p>
						<span className="opacity-80">I am</span>{" "}
						<span
							onClick={playAudio}
							className="bg-paleBrown px-3 rounded-full font-semibold inline-flex items-center gap-2 w-max cursor-pointer text-dark opacity-100 capitalize"
						>
							oluwatimilehin awoniyi
							<i className="bx bxs-volume-full"></i>
						</span>{" "}
						<audio
							ref={audioRef}
							className="hidden"
						>
							<source
								src="/src/assets/name.mp3"
								type="audio/mp3"
							/>
							Your browser does not support the audio element.
						</audio>
						<span className="opacity-80">
							a Frontend Developer proficient in JavaScript (React
							and Svelte). I specialize in creating responsive UI
							components and using code to connect people and
							technology. I apply logical thinking, algorithms,
							and creativity to problem-solving.
						</span>
					</p>
				</div>
			</div>
			<HeroGrid />
			<Footer />
		</section>
	);
}

import Footer from "./Footer";
import HeroGrid from "./Hero-Grid";

export default function Hero() {
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
					<h1 className="text-5xl font-bold">
						front-end
						<br className="min-[490px]:hidden" /> developer
					</h1>
					<p className="opacity-80">
						A software developer based in Lagos, Nigeria. Some
						times, I use water, keystrokes and algorithms to solve
						problems. Other times, I use code to build bridges
						between people and technology.
					</p>
				</div>
			</div>
			<HeroGrid />
			<Footer />
		</section>
	);
}

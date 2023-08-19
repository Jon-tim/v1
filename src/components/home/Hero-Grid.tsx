import analyse from "../../assets/noun-analysis-4427404.svg";
import idea from "../../assets/noun-brain-idea-3749747.svg";

export default function HeroGrid() {
	return (
		<>
			<section className="parent-box flex flex-col items-center md:flex-row gap-4">
				<div className="md:w-[35%] h-[400px] w-full child-box box box-1 flex flex-col gap-4">
					<div className="flex items-center  h-[40%] gap-4">
						<div className="box p-5 bg-paleBlue h-full flex-1 flex items-end justify-center">
							<p className="text-dark font-semibold text-2xl">
								vivid imagination
							</p>
						</div>
						<div className="box p-5 h-full bg-paleRed flex-1 flex items-end justify-center">
							<p className="text-dark font-semibold text-2xl">
								i've a dream
							</p>
						</div>
					</div>
					<div className="box analyse bg-paleBrown h-[60%] flex  items-center flex-col justify-center p-5">
						<div className="w-1/3">
							<img
								src={analyse}
								alt=""
								className="w-full"
							/>
						</div>
						<p className="text-dark text-center font-semibold text-xl">
							get seamless analysis of your noting activity
						</p>
					</div>
				</div>
				<div className="md:w-[45%] child-box h-[400px] w-full box box-2 bg-paleGreen p-5 relative overflow-hidden">
					<div className=" h-full w-full text-center flex flex-col gap-3 text-dark">
						<p className="text-2xl font-semibold">
							once had'em ideas then what? <br />
							No Evidence?? 🫣
							<span className="font-semibold block text-paleBrown">
								{" "}
								you go explain tire!!
							</span>
						</p>
					</div>
					<div className="w-[500px] absolute -bottom-[320px] left-1/2 translate-x-[-50%]">
						<img
							className="w-full"
							src={idea}
							alt=""
						/>
					</div>
				</div>
				<div className="md:w-[20%] h-[200px] child-box box box-3 w-full flex gap-4 items-center md:h-[400px] md:flex-col text-dark">
					<div className="box-one flex items-end justify-center text-left p-5 h-full w-full box bg-paleBrown md:h-[60%]">
						<p className="text-dark font-semibold text-xl">
							drop'em notes like it's
							<span className="text-paleRed"> hot 🔥</span>
						</p>
					</div>
					<div className="box p-5 h-full w-full flex items-end bg-palePurple md:h-[40%] secure"></div>
				</div>
			</section>
		</>
	);
}

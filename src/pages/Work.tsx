import Nav from "../components/home/Nav";

export default function Work() {
	return (
		<section className="max-w-5xl mx-auto p-4">
			<Nav />
			<section>
				<div>
					<div className="box bg-paleBrown text-dark my-4 p-4">
						<h1 className="text-2xl capitalize font-semibold pb-4">
							projects
						</h1>
						<div className="flex items-center gap-12">
							<i className="bx bx-briefcase text-5xl hidden  md:block"></i>
							<p className="opacity-80 w-[]">
								I try to craft interactive experiences with
								<b> JavaScript.</b> Currently mastering the art
								of
								<b> Fullstack Engineering</b> to bring more
								magic to the web via{" "}
								<b>
									<a
										href="https://www.alxafrica.com/software-engineering-plus/"
										className="underline"
										target="_blank"
									>
										ALX SWE Program
									</a>
								</b>
								!
								<br />
								PS: I've got a soft spot for e-commerce and
								dashboard projects.
							</p>
						</div>
					</div>
					<section>
						<aside className="my-8 flex gap-4 items-center">
							<p className="rounded filter py-1 px-2 capitalize w-max font-semibold ">
								filter:
							</p>
							<div className="w-full flex items-center gap-4 overflow-x-scroll p-2 h-full text-sm">
								<p className="filter-item ">HTML/CSS</p>
								<p className="filter-item ">react/next</p>
								<p className="filter-item ">svelte/svelteKit</p>
								<p className="filter-item ">c</p>
								<p className="filter-item ">python</p>
							</div>
						</aside>
						<section className="work-grid">
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
							<div className="box project p-4 flex items-center justify-center">
								<p className="capitalize text-xl">hisfsdffds</p>
							</div>
						</section>
					</section>
				</div>
			</section>
		</section>
	);
}

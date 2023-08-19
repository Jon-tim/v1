import Hero from "../components/home/Hero";
import Nav from "../components/home/Nav";

export default function Home() {
	return (
		<section className="max-w-5xl mx-auto p-4">
			<Nav />
			<Hero />
		</section>
	);
}

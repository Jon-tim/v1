import { Link } from "react-router-dom";

export default function ContactLinks() {
	const links = [
		{
			id: 1,
			icon: "bxl-github",
			to: "https://github.com/Jon-tim",
		},
		{
			id: 2,
			icon: "bxl-twitter",
			to: "https://twitter.com/OxTimilehin",
		},
		{
			id: 3,
			icon: "bxl-linkedin",
			to: "https://www.linkedin.com/in/oluwatimilehin-awoniyi/",
		},
		{
			id: 4,
			icon: "bxl-gmail",
			to: "mailto:awoniyitimi@outlook.com",
		},
	];
	return (
		<>
			{links.map((item) => (
				<Link
					key={item.id}
					to={item.to}
				>
					<i
						className={`transition-colors duration-300  hover:text-paleRed bx ${item.icon}`}
					></i>
				</Link>
			))}
		</>
	);
}

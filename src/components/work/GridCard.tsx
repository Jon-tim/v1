// import DialogModal from "./Dialog";

type props = {
	id?: string;
	src?: string;
	name: string;
	details?: string;
	category?: string;
};

export default function GridCard({ name }: props) {
	return (
		<>
			<div className="box project p-4 flex items-center text-center justify-center">
				<p className="capitalize text-2xl font-semibold">{name}</p>
			</div>
		</>
	);
}

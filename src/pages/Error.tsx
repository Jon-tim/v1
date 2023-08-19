import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
	const navigate = useNavigate();
	const error: unknown = useRouteError();

	return (
		<div id="error-page">
			<h1>Whoops!</h1>
			<p>
				Sorry, an unexpected error has occurred. It may be that you're
				trying to access a page which doesn't exist. Regardless, you
				aren't lost: we found you here, we can take you to where you
				came from.
			</p>
			<p>
				<i className="font-bold text-red-500">
					{(error as Error)?.message ||
						(error as { statusText?: string })?.statusText}
				</i>
			</p>
			<button onClick={() => navigate(-1)}>&larr; Go back</button>
		</div>
	);
}

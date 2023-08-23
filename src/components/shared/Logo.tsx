import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link
			to="/"
			className="cursor-pointer flex items-center gap-2"
		>
			{/* <svg
				id="logo"
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 688.35 660.76"
				className="fill-paleGreen"
			>
				<g id="analytics">
					<path d="m592.09,20.87c-19.19-13.21-41.97-20.87-66.37-20.87H123.72C55.5,0,0,59.85,0,133.41v359.57c0,26.32,7.11,50.88,19.36,71.58,21.98,37.15,60.55,61.84,104.36,61.84h340.61v-90.72c0-51.59,40.57-93.69,91.56-96.14,1.55-.08,3.12-.12,4.7-.12s3.15.04,4.7.12h84.15V133.41c0-47.25-22.89-88.84-57.35-112.54h0Zm0,356.83h-31.37c-54.46,0-105.68,27.35-134.69,73.43-8.42,13.37-14.9,28.08-19.05,43.74-1.87,7.07-3.27,14.33-4.16,21.75-.59,4.92-.82,9.88-.82,14.84v33.1H123.72c-36.6,0-66.37-32.11-66.37-71.58V133.41c0-39.46,29.77-71.57,66.37-71.57h402c36.6,0,66.37,32.11,66.37,71.57v244.29h0Z" />
					<path
						className="logo-circle fill-paleRed"
						d="m688.35,564.5c0,10.06-1.54,19.76-4.41,28.88-.87,2.8-1.88,5.54-3,8.22-10.42,24.93-31.01,44.53-56.6,53.62h-.75v.26c-9.87,3.43-20.47,5.28-31.5,5.28s-22.17-1.95-32.25-5.54c-.03,0-.06,0-.08-.03-28.3-10.08-50.49-33.03-59.52-61.81-2.87-9.12-4.41-18.82-4.41-28.88,0-51.59,40.57-93.69,91.56-96.14h9.4c9.35.44,18.34,2.22,26.8,5.16,25.85,8.94,46.7,28.58,57.25,53.64.04.08.07.16.1.24,4.77,11.42,7.41,23.95,7.41,37.1h0Z"
					/>
					<g id="lines">
						<path d="m324.72,440.92c0,10.14-4.11,19.32-10.76,25.96-6.64,6.65-15.82,10.76-25.96,10.76h-149.47c-20.28,0-36.72-16.44-36.72-36.72,0-10.14,4.11-19.32,10.75-25.96,6.65-6.65,15.83-10.76,25.97-10.76h149.47c20.28,0,36.72,16.44,36.72,36.72Z" />
						<path d="m547.63,185.48c0,10.14-4.11,19.32-10.75,25.96-6.65,6.65-15.83,10.76-25.97,10.76H138.53c-20.28,0-36.72-16.44-36.72-36.72,0-10.14,4.11-19.32,10.75-25.96,6.65-6.65,15.83-10.76,25.97-10.76h372.38c20.28,0,36.72,16.44,36.72,36.72Z" />
						<path d="m547.63,313.2c0,10.14-4.11,19.32-10.75,25.96-6.65,6.65-15.83,10.76-25.97,10.76H138.53c-20.28,0-36.72-16.44-36.72-36.72,0-10.14,4.11-19.32,10.75-25.96,6.65-6.65,15.83-10.76,25.97-10.76h372.38c20.28,0,36.72,16.44,36.72,36.72Z" />
					</g>
				</g>
			</svg> */}
			<h1 className="text-xl capitalize font-bold text-paleGreen">
				oluwa<span className="text-paleRed">timilehin</span>
			</h1>
		</Link>
	);
}
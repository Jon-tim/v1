// import React from 'react'

export default function Filter() {
	return (
		<aside className="my-8 flex gap-4 items-center">
			<p className="rounded filter py-1 px-2 capitalize w-max font-semibold ">
				filter:
			</p>
			<div className="w-full flex items-center gap-4 overflow-x-scroll p-2 h-full text-sm">
				<button className="active filter-item border ">HTML/CSS</button>
				<button className="filter-item ">react/next</button>
				<button className="filter-item ">svelte/svelteKit</button>
				<button className="filter-item ">c</button>
				<button className="filter-item ">python</button>
			</div>
		</aside>
	);
}

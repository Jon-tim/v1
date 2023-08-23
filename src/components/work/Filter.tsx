// import React from 'react'

export default function Filter() {
	return (
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
	);
}

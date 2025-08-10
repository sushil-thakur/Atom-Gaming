import React, { useState } from "react";

const cards = [
	{
		id: 1,
		day: "18",
		month: "OCT",
		status: "ONLINE",
		title: "EXTREME ATHLETICISM IS THE NEW MIDLIFE CRISIS",
		excerpt: "Set to launch on the manufacturer's new A330neo aircraft ...",
		img: "/rec4.jpg",
	},
	{
		id: 2,
		day: "18",
		month: "OCT",
		status: "OFFLINE",
		title: "THE DAY I LOST MY CHILD IN CHARLES DE GAULLE AIRPORT",
		excerpt: "Set to launch on the manufacturer's new A330neo aircraft ...",
		img: "/rec3.jpg",
	},
	{
		id: 3,
		day: "18",
		month: "OCT",
		status: "NEWS",
		title: "RELATIONSHIPS AREN'T EASY, BUT THEY'RE WORTH IT",
		excerpt: "Set to launch on the manufacturer's new A330neo aircraft ...",
		img: "/rec.jpg",
	},
];

const Displaycard = () => {
	const [activeIndex, setActiveIndex] = useState(0); // first active by default
	return (
		<section className="w-full bg-white pt-12 pb-20 md:pt-12 md:pb-24 pl-16 pr-12 md:pl-39 md:pr-32 -mt-6 md:-mt-10">
			<div
				className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-gray-200"
				onMouseLeave={() => setActiveIndex(0)}
			>
				{cards.map((c, i) => {
					const active = i === activeIndex;
					return (
						<div
							key={c.id}
							className={`relative group overflow-hidden transition-colors duration-500 flex flex-col justify-between p-14 min-h-[500px] ${
								active ? "bg-black" : "bg-white"
							}`}
							onMouseEnter={() => setActiveIndex(i)}
						>
							{/* Image (only visible when active) */}
							<img
								src={c.img}
								alt={c.title}
								className={`absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ${
									active ? "opacity-100 brightness-110" : ""
								}`}
							/>
							{/* Dark overlay for active (lightened) */}
							<div
								className={`absolute inset-0 bg-black/50 transition-opacity duration-500 pointer-events-none ${
									active ? "opacity-100" : "opacity-0"
								}`}
							/>
							{/* Dots for active */}
							<div
								className={`absolute inset-0 transition-opacity duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:14px_14px] ${
									active ? "opacity-100" : "opacity-0"
								}`}
							/>

							<div className="relative z-10 flex flex-col gap-10">
								<div className="flex items-start gap-6">
									<div
										className={`flex flex-col items-start leading-none ${
											active ? "text-white" : "text-gray-800"
										}`}
									>
										<span className="text-5xl font-bold tracking-tight bebas">
											{c.day}
										</span>
										<span className="text-[11px] mt-1 font-semibold tracking-wider">
											{c.month}
										</span>
									</div>
									<div
										className={`h-14 w-px ${
											active ? "bg-white/30" : "bg-gray-300"
										}`}
									/>
									<div
										className={`uppercase text-sm font-semibold tracking-wide mt-[6px] ${
											active ? "text-white" : "text-gray-500"
										}`}
									>
										{c.status}
									</div>
								</div>

								<div className="flex flex-col gap-6">
									<h3
										className={`text-3xl font-extrabold leading-snug tracking-wide ${
											active ? "text-white" : "text-gray-900"
										}`}
									>
										{c.title}
									</h3>
									<p
										className={`text-[15px] leading-relaxed max-w-md ${
											active ? "text-white/80" : "text-gray-500"
										}`}
									>
										{c.excerpt}
									</p>
								</div>

								<button
									className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
										active
											? "text-white hover:text-white/80"
											: "text-gray-700"
									}`}
								>
									Read more
									<span
										className={`inline-block w-2.5 h-2.5 border-r-2 border-b-2 rotate-[-45deg] translate-y-[1px] ${
											active ? "border-white" : "border-gray-700"
										}`}
									/>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Displaycard;

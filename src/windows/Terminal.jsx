import WindowControls from "#components/WindowControls";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
	return (
		<>
			<div id="window-header">
				<WindowControls target="terminal" />
				<h2 className="font-geist font-black">Tech Stack</h2>
			</div>

			<div className="techstack">
				<p className="font-geist font-black">
					<span>@advaith % </span>
					show tech stack
				</p>

				<div className="label font-geist font-black">
					<p className="w-32">Category</p>
					<p>Technologies</p>
				</div>

				<ul className="content font-geist font-black">
					{techStack.map(({ category, items }) => (
						<li key={category} className="flex items-center">
							<Check className="check" size={20} />
							<h3 className="font-geist font-black">{category}</h3>
							<ul>
								{items.map((item, i) => (
									<li key={i}>
										{item}
										{i < items.length - 1 ? "," : ""}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>

				<div className="footnote font-geist font-black">
					<p>
						<Check size={20} /> {techStack.length} of {techStack.length} loaded successfully
					</p>

					<p className="text-black">
						<Flag size={15} fill="black" />
						Render time: 6ms
					</p>
				</div>
			</div>
		</>
	);
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;

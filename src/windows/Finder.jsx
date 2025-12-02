import React from "react";
import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";

const Finder = () => {
	const { openWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();

	const openItem = (item) => {
		if (item.fileType === "pdf") return openWindow("resume");
		if (item.kind === "folder") return setActiveLocation(item);
		if (["fig", "url"].includes(item.fileType) && item.href)
			return window.open(item.href, "_blank");

		openWindow(`${item.fileType}file`, item);
	};

	const renderList = (items) =>
		items.map((item) => (
			<li
				key={item.id}
				onClick={() => setActiveLocation(item)}
				className={clsx(
					"flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-gray-200", // Added hover effect
					item.id === activeLocation.id
						? "bg-blue-100 text-blue-600"
						: "text-gray-700"
				)}
			>
				<img
					src={item.icon}
					className="w-4 h-4 object-contain"
					alt={item.name}
				/>
				<p className="text-sm font-medium truncate">{item.name}</p>
			</li>
		));

	return (
		<>
			<div id="window-header">
				<WindowControls target="finder" />
				{/* Visual Search Bar */}
				<div className="flex items-center gap-2 text-gray-400 bg-gray-100/50 px-2 py-0.5 rounded ml-4 border border-gray-200 w-full max-w-[200px]">
					<Search size={14} />
					<span className="text-xs">Search</span>
				</div>
			</div>

			<div className="bg-white flex h-full overflow-hidden rounded-b-lg">
				{/* Sidebar */}
				<div className="sidebar w-48 bg-gray-50/80 p-3 border-r border-gray-200 h-full shrink-0 backdrop-blur-sm">
					<div className="mb-4">
						<h3 className="px-2 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
							Favorites
						</h3>
						<ul>{renderList(Object.values(locations))}</ul>
					</div>

					<div>
						<h3 className="px-2 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
							My Work
						</h3>
						<ul>
							{renderList(Object.values(locations.work.children))}
						</ul>
					</div>
				</div>

				<div className="flex-1 p-4 overflow-y-auto bg-white">
					<div className="grid grid-cols-4 gap-4 auto-rows-min">
						{activeLocation.children ? (
							activeLocation.children.map((item) => (
								<div
									key={item.id}
									onClick={() => openItem(item)}
									className="flex flex-col items-center gap-2 p-2 rounded hover:bg-blue-50 cursor-pointer group text-center"
								>
									<img
										src={item.icon}
										alt={item.name}
										className="w-12 h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
									/>
									<p className="text-sm text-gray-700 leading-tight wrap-break-word w-full max-w-[100px]">
										{item.name}
									</p>
								</div>
							))
						) : (
							<div className="col-span-4 flex flex-col items-center justify-center text-gray-400 mt-20">
								<p>This folder is empty</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

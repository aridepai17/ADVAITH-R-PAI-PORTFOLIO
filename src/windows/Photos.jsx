import React, { useState } from "react";
import clsx from "clsx";
import { WindowControls } from "#components";
import { photosLinks, gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Photos = () => {
    const [activeAlbum, setActiveAlbum] = useState(photosLinks[0]);
    const { openWindow } = useWindowStore();

    const openImage = (img) => {
        openWindow("imgfile", {
            name: "Photo",
            imageUrl: img,
        });
    };

    return (
        <>
            {/* Window header */}
            <div id="window-header">
                <WindowControls target="photos" />
                <h2 className="font-geist font-black">Gallery</h2>
            </div>

            <div className="bg-white flex h-full overflow-hidden rounded-b-lg">
                {/* Sidebar – albums */}
                <div className="w-48 bg-gray-50/80 p-3 border-r border-gray-200 h-full shrink-0 backdrop-blur-sm">
                    <h3 className="px-2 text-xs text-gray-500 mb-2 uppercase tracking-wider">Albums</h3>

                    <ul className="space-y-1">
                        {photosLinks.map((album) => (
                            <li
                                key={album.id}
                                onClick={() => setActiveAlbum(album)}
                                className={clsx(
                                    "flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-gray-200",
                                    album.id === activeAlbum.id
                                        ? "bg-blue-100 text-blue-600 font-bold"
                                        : "text-gray-700"
                                )}
                            >
                                <img
                                    src={album.icon}
                                    alt={album.title}
                                    className="w-4 h-4 object-contain"
                                />
                                <p className="text-sm truncate">{album.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-4 auto-rows-min">
                        {gallery
                            .filter(({ album }) => album === activeAlbum.id)
                            .map(({ id, img }) => (
                            <div
                                key={id}
                                onClick={() => openImage(img)}
                                className="cursor-pointer rounded overflow-hidden group"
                            >
                                <img
                                    src={img}
                                    alt={`Photo ${id}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;

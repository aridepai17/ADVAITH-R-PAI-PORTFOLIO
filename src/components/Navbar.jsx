import { navLinks, navIcons } from "#constants";
import useThemeStore from "#store/theme";
import useWindowStore from "#store/window";
import dayjs from "dayjs";

const Navbar = () => {
	const { openWindow } = useWindowStore();
	const { toggleTheme } = useThemeStore();

	return (
		<nav>
			<div>
				<img src="/images/logo.svg" alt="Logo" />
				<p>Advaith R Pai's Portfolio</p>

				<ul>
					{navLinks.map(({ name, type }) => (
						<li key={type} onClick={() => openWindow(type)}>
							<p>{name}</p>
						</li>
					))}
				</ul>
			</div>

			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<li
							key={id}
							onClick={id === 4 ? toggleTheme : undefined}
						>
							<img
								src={img}
								alt={id === 4 ? "mode-toggle" : `icon-${id}`}
								className={`
                                    w-5 h-5 transition-all duration-200 
                                    hover:scale-110 hover:brightness-125 
                                    ${
										id === 4
											? "cursor-pointer"
											: "cursor-default"
									}
                                `}
							/>
						</li>
					))}
				</ul>

				<time className="font-geist font-black">
					{dayjs().format("ddd MMM D h:mm A")}
				</time>
			</div>
		</nav>
	);
};

export default Navbar;

import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";

const Navbar = () => {
	const { openWindow } = useWindowStore();

	return (
		<nav>
			<div>
				<img src="/images/logo.svg" alt="Logo" />
				<p>Advaith R Pai's Portfolio</p>

				<ul>
					{navLinks.map(({ id, name, type }) => (
						<li key={type} onClick={() => openWindow(type)}>
							<p>{name}</p>
						</li>
					))}
				</ul>
			</div>

			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<li key={id}>
							<img
								src={img}
								className="icon-hover"
								alt={`icon-${id}`}
							/>
						</li>
					))}
				</ul>

				<time className="font-geist font-black">{dayjs().format("ddd MMM D h:mm A")}</time>
			</div>
		</nav>
	);
};

export default Navbar;

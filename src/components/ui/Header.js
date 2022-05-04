import { useState } from "react";

export const Header = () => {
	const [bg, setBg] = useState({
		text: "light",
		icon: "sunny",
	});

	const changeBg = () => {
		document.body.classList.toggle("darkTheme");
		document.body.classList.contains("darkTheme")
			? setBg({ text: "light", icon: "sunny" })
			: setBg({ text: "dark", icon: "moon" });
	}
	const { text, icon } = bg;
	return (
		<div className="header-container">
			<div className="header__navegation">
				<div className="icon">
					<ion-icon name="chevron-back-outline"></ion-icon>
				</div>
				<div className="icon">
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</div>
			</div>
			<div className="header__search">
				<div className="icon">
					<ion-icon name="search-outline"></ion-icon>
				</div>
				<input
					type="text"
					className="search__input"
					placeholder="Search any song here"
				/>
			</div>
			<div className="header__notification">
				<div className="icon">
					<ion-icon name="notifications-outline"></ion-icon>
				</div>
				<span className="point__notification"></span>
			</div>
			<div className="header__bgbutton" onClick={changeBg}>
				<span className="icon">
					<ion-icon name={`${icon}-outline`}></ion-icon>
				</span>{" "}
				{text}
			</div>
		</div>
	);
};

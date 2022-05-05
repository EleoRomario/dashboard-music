import { useState } from "react";

export const Header = () => {
	const [bg, setBg] = useState({
		text: "dark",
		icon: "moon",
	});

	const changeBg = () => {
		document.body.classList.toggle("darkTheme");
		document.body.classList.contains("darkTheme")
			? setBg({ text: "light", icon: "sunny" })
			: setBg({ text: "dark", icon: "moon" });
	};
	const { text, icon } = bg;
	return (
		<div className="header-container">
			<div className="header__btn-menu">
				<div className="icon">
					<ion-icon name="grid-outline"></ion-icon>
				</div>
			</div>
			<div className="search__container">
				<div className="search__input">
					<div className="icon">
						<ion-icon name="search-outline"></ion-icon>
					</div>
					<input
						type="text"
						className="search__input"
						placeholder="Search any song here"
					/>
				</div>
			</div>
			<div className="header__btns">
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
		</div>
	);
};

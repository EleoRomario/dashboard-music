export const Header = () => {
  return (
		<>
			<div className="header__container">
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
				<div className="header__bgbutton">
					<span className="icon">
						<ion-icon name="sunny-outline"></ion-icon>
					</span>{" "}
					Light
				</div>
			</div>
		</>
  );
}

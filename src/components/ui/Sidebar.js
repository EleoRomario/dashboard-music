import avatar from '../../assets/images/avatar.png';
export const Sidebar = () => {
  return (
		<>
			<div className="sidebar__header">
				<div className="sidebar__header__avatar">
					<img src={avatar} alt="" />
				</div>
				<div className="sidebar__header__name">
					Hello, <span className="user__name">John Doe</span>
				</div>
			</div>
			<nav className="nav__menu">
				<div className="nav__title">Menu</div>
				<ul className="nav__list">
					<li className="nav__item">
						<ion-icon name="home-outline"></ion-icon> Home
					</li>
					<li className="nav__item">
						<ion-icon name="disc-outline"></ion-icon> Albums
					</li>
					<li className="nav__item">
						<ion-icon name="disc-outline"></ion-icon> Artists
					</li>
					<li className="nav__item">
						<ion-icon name="mic-outline"></ion-icon> Podcasts
					</li>
				</ul>
			</nav>
			<div className="nav__menu">
				<div className="nav__title">My Library</div>
				<ul className="nav__list">
					<li className="nav__item">
						<ion-icon name="musical-notes-outline"></ion-icon>{" "}
						Recently Played
					</li>
					<li className="nav__item liked">
						<ion-icon name="heart-outline"></ion-icon> Liked Songs
					</li>
					<li className="nav__item">
						<ion-icon name="add-outline"></ion-icon> Create PlayList
					</li>
				</ul>
			</div>
		</>
  );
}

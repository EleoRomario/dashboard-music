import banner from '../../assets/images/banner.svg';
export const Banner = () => {
	return (
		<div className="banner section">
			<div className="banner__info">
				<span className="span">Playlist</span>
				<h1 className="title">Your Liked Songs</h1>
				<div className="subtitle">
					<ion-icon name="musical-notes-outline"></ion-icon>
					<p>24 songs</p>
					<ion-icon name="time-outline"></ion-icon>
					<p>1hr 14min</p>
				</div>
			</div>
      <div className="banner__img">
        <img src={banner} alt="banner" />
      </div>
		</div>
	);
};

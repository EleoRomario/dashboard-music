import album from '../../assets/images/album1.jpg';

export const MusicPlayer = () => {
  return (
		<div className="music__container">
			<img src={album} className="music__image" alt="music" />
			<div className="music__player">
				<div className="music__player__header">
					<div className="music__player__header__title">
						Stuck in space
					</div>
					<div className="music__player__header__author">
						Eleo romario
					</div>
				</div>
				<div className="music__player__bar">
					<div className="music__player__bar-progress">
						<div className="bar__progress"></div>
						<div className="bar__toggle"></div>
					</div>
					<div className="music__player__time">
						<span>0:00</span>
						<span>0:00</span>
					</div>
				</div>
				<div className="music__player__controls">
					<div className="btn__random">
						<ion-icon name="shuffle-outline"></ion-icon>
					</div>
					<div className="btn__pre">
						<ion-icon name="play-skip-back"></ion-icon>
					</div>
					<div className="btn__play">
						<ion-icon name="play"></ion-icon>
					</div>
					<div className="btn__next">
						<ion-icon name="play-skip-forward"></ion-icon>
					</div>
					<div className="btn__repeat">
						<ion-icon name="repeat-outline"></ion-icon>
					</div>
				</div>
			</div>
		</div>
  );
}

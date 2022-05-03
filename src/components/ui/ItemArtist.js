export const ItemArtist = ({ artist }) => {
	console.log(artist);
	const { name, image, followers, listenes } = artist;
	return (
		<>
			<div className="item-artist">
				<img
					src={require(`../../assets${image}`)}
					alt="artist"
					className="item-artist__image"
				/>
				<div className="item-artist__info">
					<div className="name">
						{name}{" "}
						<span className="verificate">
							<ion-icon name="checkmark-outline"></ion-icon>
						</span>
					</div>
					<div className="followers">
						{followers} Followers • <span>{listenes} Listenes</span>
					</div>
				</div>
			</div>
		</>
	);
};

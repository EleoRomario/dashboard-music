
export const ItemSong = ({song}) => {
  const { id, artist, name, url } = song;
  return (
    <div className='song'>
      <img src={require(`../../assets${url}`)} alt="album" className='song__img' />
      <div className="song__info">
        <p className="song__info__title">{name}</p>
        <p className="song__info__author">{artist}</p>
      </div>
    </div>
  )
}

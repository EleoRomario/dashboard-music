import album from '../../assets/images/album1.jpg';
export const ItemSong = () => {
  return (
    <div className='song'>
      <img src={album} alt="album" className='song__img' />
      <div className="song__info">
        <p className="song__info__title">Anata to watashi</p>
        <p className="song__info__author">Asahi hiro</p>
      </div>
    </div>
  )
}

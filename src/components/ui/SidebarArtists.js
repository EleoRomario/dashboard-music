import { getArtist } from "../../selectors/getArtist"
import { ItemArtist } from "./ItemArtist"
import { MusicPlayer } from "./MusicPlayer";

export const SidebarArtists = () => {
  const artists = getArtist();
  return (
    <>
      <div className="top-artists__header">
        <h4 className="title">Top Artists</h4>
        <div className="more">
          <span>View All</span>
        </div>
      </div>
      <div className="top-artists__list">
      {artists.map(artist => (
        <ItemArtist key={artist.id} artist={artist} />
      ))}
      </div>
      <MusicPlayer/>
    </>
  )
}

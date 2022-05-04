import { songs } from "../../data/songs";
import { ItemSong } from "../ui/ItemSong"

export const ListSongs = () => {
  const data = songs;
  return (
    <div className="list-songs section">
      {data.map((song, index) => (
        <ItemSong key={index} song={song}/>
      ))}
    </div>
  )
}

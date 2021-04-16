import React from 'react';
import '../css/SongRow.css';


export default function SongRow({ track }) {
    return (
        <div className="song-row">
            <img className="song-row__album" src={track.album.images[0].url} alt="song img" />
            <div className="song-row__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(", ")} - {" "} {track.album.name}
                </p>
            </div>
        </div>
    )
}
import React from 'react';
import '../css/Body.css'
import { useDataLayerValue } from '../DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../components/SongRow';

export default function Body({ spotify }) {
    const [{ vn_list }, dispatch] = useDataLayerValue();
    console.log(vn_list)
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={vn_list?.images[0]?.url} alt="" />
                <div className="body__info-text">
                    <strong>PLAYLISTS</strong>
                    <h2>The Bakari Sellers Podcast</h2>
                    <p>{vn_list?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {vn_list?.tracks.items.map((item, i) =>
                    <SongRow key={i} track={item.track} />
                )}
            </div>
        </div>
    )
}
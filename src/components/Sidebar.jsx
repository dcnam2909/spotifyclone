import React from 'react';
import '../css/Sidebar.css';
import Logo from '../images/LogoSpotify.png'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';


export default function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={Logo} alt="logo" />
            <SidebarOption text="Trang chủ" Icon={HomeIcon} />
            <SidebarOption text="Tìm kiếm" Icon={SearchIcon} />
            <SidebarOption text="Thư viện" Icon={LibraryMusicIcon} />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist, i) => (
                <SidebarOption key={i} text={playlist.name} />
            ))}


        </div>
    )
}
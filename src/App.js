import Login from './components/Login';
import MainPlayer from './components/MainPlayer';
import './App.css';
import { getTokenFromURL } from './components/spotify'
import { useEffect } from 'react';
import SpotifyWebAPI from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';



const spotify = new SpotifyWebAPI();

export default function App() {
    const [{ token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = "";
        // temporary token
        const _token = hash.access_token;
        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            })

            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });

            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
            });

            spotify.getPlaylist('1fwHPvLbQynOmGVfRqezj5').then(list => {
                dispatch({
                    type: 'SET_VN',
                    vn_list: list,
                });
            });
        }
    }, []);
    return (
        <>
            {token ? <MainPlayer spotify={spotify} /> : <Login />}
        </>
    )
}
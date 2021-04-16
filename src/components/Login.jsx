import '../css/Login.css';
import Logo from '../images/LogoSpotify.png';
import { loginURL } from './spotify';
export default function Login() {

    return (
        <div className="login">
            <img src={Logo} alt="logo" />

            <a href={loginURL}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}
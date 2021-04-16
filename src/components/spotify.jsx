export const authorize = "https://accounts.spotify.com/authorize";

const afterLoginURL = "http://localhost:3000/";
const clientID = "291b45f168364c83ae2bc589371fd929";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
];

export const loginURL = `${authorize}?client_id=${clientID}&redirect_uri=${afterLoginURL}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromURL = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((init, item) => {
            let value = item.split("=");
            return {
                ...init,
                [value[0]]: value[1]
            }
        }, {});
}
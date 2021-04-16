export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    itetm: null,
    // token: "BQACEZGBHbsgNfirjgUtfzOJ0RUbVJkbjnn8opTAJTb4b6kFnD…szzfGtd8N1JTf8Aip0OdeEunVX9zELrlW0cB_u9DeS-pscFiF",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_VN':
            return {
                ...state,
                vn_list: action.vn_list,
            };
        default:
            return state;
    }
};

export default reducer;

import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'No scrumbs', duration: '5:57'},
        {title: 'Macarena', duration: '3:44'},
        {title: 'Star Wars', duration: '2:04'},
        {title: 'Hello kitty', duration: '1:31'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

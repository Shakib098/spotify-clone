import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artist: null,
    playing: false,
    item: null,
    // token: "BQDCPiUjDR5UZh8VUmtwXkeb4ymH5XPq7okNKF0-2y--PI-A5o7pDJT47vhT74a7KmukiUAGEKyBN-70tZrS8EuG7aJr0o-iZU1Q5zmRGXfh-yU4j5FdX5EggqG_Ej-hoGi8wlkRHUJ0tsUhAwHD-mroLgzHFoChXj_wKL_nXg1m6dGgL-E7xP-7ksFrdsjELyzUKvnw9M1Xuc04CAz1",
};

const reducer = (state, action) => {
    console.log(action);

    // switch(action.type) {
    //     case "SET_USER":
    //         return {
    //             ...state,
    //             user: action.user,
    //         };

    //     case "SET_TOKEN":
    //         return {
    //             ...state,
    //             token: action.token
    //         }
        
    //     case "SET_PLAYLISTS":
    //         return {
    //             ...state,
    //             playlists: action.playlists,
    //         };
    //     case "SET_DISCOVER_WEEKLY":
    //         return {
    //             ...state,
    //             discover_weekly: action.discover_weekly,
    //         }
    //     default:
    //         return state;
    // }

    switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
    
        case "SET_PLAYING":
          return {
            ...state,
            playing: action.playing,
          };
    
        case "SET_ITEM":
          return {
            ...state,
            item: action.item,
          };
    
        case "SET_DISCOVER_WEEKLY":
          return {
            ...state,
            discover_weekly: action.discover_weekly,
          };
    
        case "SET_TOP_ARTISTS":
          return {
            ...state,
            top_artists: action.top_artists,
          };
    
        case "SET_TOKEN":
          return {
            ...state,
            token: action.token,
          };
    
        case "SET_SPOTIFY":
          return {
            ...state,
            spotify: action.spotify,
          };
    
        case "SET_PLAYLISTS":
          return {
            ...state,
            playlists: action.playlists,
          };
        default:
          return state;
    }
}

export default reducer
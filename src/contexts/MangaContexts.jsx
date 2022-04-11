import React, {createContext, useReducer, useEffect } from "react";
import { useReducer } from "react";
import MangaInfos from "../components/MangaInfos";


const MangaInfosProvider = (props) => {
    const [ manga, ], useReducer(mangaReducer, []);
    useEffect (() =>{
        localStorage.setItem('mangas')
    }, [manga])
}
return (
    <BookContext.Provider value={{manga, dispatch}}>
        {props.children}
    </BookContext.Provider>
)
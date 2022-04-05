import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMangas} from "../states/mangasSlice";
import { useParams } from 'react-router-dom';

const MangaInfos = () => { 
    const { mangas, loading } = useSelector((store) => store.mangas);
    const { mangaId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchMangas());
    }, [])

    
    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
        

    return (
        <div className="mangas-list">
            {mangas.find(manga => manga.mal_id === parseInt(mangaId)).title}
            <img src={mangas.find(manga => manga.mal_id === parseInt(mangaId)).images.jpg.image_url} alt="" />
        </div>
    );

    
}

export default MangaInfos;

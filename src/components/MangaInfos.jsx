import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMangas} from "../states/mangasSlice";
import { useParams } from 'react-router-dom';

const MangaInfos = () => { 
    const { search, mangas, loading } = useSelector((store) => store.mangas);
    const dispatch = useDispatch();
    const [filteredMangas, setFilteredMangas] = useState(null);
    const { mangaId } = useParams();
    const { manga } = mangas[mangaId]


    /* useEffect(() => {
        dispatch(fetchMangas());
    }, [])

    useEffect(() => {
        setFilteredMangas(mangas[mangaId]);
        console.log(mangas)
    }, [search, mangas]) */


    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <div className="mangas-list">
            {manga.title}
            <img src={manga.images.jpg.image_url} alt="" />
        </div>
    );
}

export default MangaInfos;

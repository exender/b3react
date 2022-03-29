import React, {useEffect, useState} from 'react';
import MangaItem from "./MangaItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchMangas} from "../states/mangasSlice";

const MangasList = () => {
  const { search, mangas, loading, error } = useSelector((store) => store.mangas);
  const dispatch = useDispatch();
  const [filteredMangas, setFilteredMangas] = useState([]);

  useEffect(() => {
    dispatch(fetchMangas());
  }, [])

  useEffect(() => {
    if (search.trim().length > 0) {
      setFilteredMangas(
        mangas.filter((manga) => manga.name.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setFilteredMangas(mangas);
    }
  }, [search, mangas])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="mangas-list">
      {filteredMangas.map((manga) => (
        <MangaItem key={manga.id} manga={manga}/>
      ))}
    </div>
  );
};

export default MangasList;
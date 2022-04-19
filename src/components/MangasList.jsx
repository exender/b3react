import React, {useEffect, useState} from 'react';
import MangaItem from "./MangaItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchMangas} from "../states/mangasSlice";
import { Checkbox } from 'rsuite';

const MangasList = () => {
  const { search, mangas, status, order, loading, error } = useSelector((store) => store.mangas);
  const dispatch = useDispatch();
  const [filteredMangas, setFilteredMangas] = useState([]);

  useEffect(() => {
    dispatch(fetchMangas());
  }, [])

  useEffect(() => {
    setFilteredMangas(mangas);
    if (search.trim().length > 0) {
      console.log("search")
      setFilteredMangas(
        (prev) => 
        prev.filter((manga) => manga.title.toLowerCase().includes(search.toLowerCase()))
      )
    }

    if (status.length > 0) {
      console.log("status")
      setFilteredMangas(
        (prev) => 
        prev.filter((manga) => status.includes(manga.status))
      )
    }

    if (order.length > 0) {
      console.log("order")
      
      /* let arrayForSort = [...prev] */
      if (order[order.length-1] === "alphabetical order") {
        setFilteredMangas(
          (prev) =>
          [...prev].sort((a, b) => (a.title > b.title) ? 1 : -1)
          );
      } else if (order[order.length-1] === "reverse alphabetical order") {
        setFilteredMangas(
          (prev) =>
          [...prev].sort((a, b) => (a.title < b.title) ? 1 : -1)
          );
      } else if (order[order.length-1] === "rank order") {
        setFilteredMangas(
          (prev) =>
          [...prev].sort((a, b) => (a.rank > b.rank) ? 1 : -1)
          );
      }
    } 
    
    if (search.trim().length <= 0 && status.length <= 0 && order.length <= 0) {
      setFilteredMangas(mangas);
    }
    
      
  }, [search, status, order, mangas])

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
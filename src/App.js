import './App.css';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import InfoManga from "./pages/InfoManga";
import SearchBar from "./components/SearchBar";
import MangasList from "./components/MangasList";
import {Provider} from "react-redux";
import store from "./states/store";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>         
          <Route path="/"element={<Index />} />         
          <Route path="/manga/:mangaId" element={<InfoManga />} />
       </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;

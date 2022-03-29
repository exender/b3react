import '../App.css';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MangasList from "../components/MangasList";
import {Provider} from "react-redux";
import store from "../states/store";

const InfoManga = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        
      </Provider>
    </div>
  );
}

export default InfoManga;
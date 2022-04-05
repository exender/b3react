import '../App.css';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MangasList from "../components/MangasList";
import {Provider} from "react-redux";
import store from "../states/store";
import Flitres from '../components/Filters';

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <div className="container">
          <SearchBar placeholder="Rechercher par nom..." />
          <Flitres />
          <MangasList />
        </div>
      </Provider>
    </div>
  );
}

export default Index;
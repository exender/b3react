import '../App.css';
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MangasList from "../components/MangasList";
import {Provider} from "react-redux";
import store from "../states/store";

const Index = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />

        <div className="container">
          <SearchBar placeholder="Rechercher par nom..." />
          <MangasList />
        </div>
      </Provider>
    </div>
  );
}

export default Index;
import "./App.scss";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import Info from "./components/cards/info/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Info />
    </div>
  );
}

export default App;

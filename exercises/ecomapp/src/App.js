import "./App.css";
import CatFilter from "./components/CatFilter";
import ProdList from "./components/ProdList";
import { TEMP_CATEGORY, TEMP_PROD } from "./prodData";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span>Welcome to React eCommmerce Shopping Mart</span>
        <span type="button" className="fas fa-shopping-cart cart"></span>
      </div>
      <div className="App-body">
        <div className="catBox">
          {TEMP_CATEGORY.map((cat) => (
            <CatFilter key={Math.random().toFixed(2)} cat={cat} />
          ))}
        </div>
        <div className="prodBox">
          {TEMP_PROD.map((prod) => (
            <ProdList key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js"
import './App.css';
import Logs from "./components/logs/Logs";
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit();
  }, [])
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechModal />
          <EditLogModal />
          <TechListModal />
          <Logs />
        </div>
      </div>
    </Provider>
    
  );
}

export default App;

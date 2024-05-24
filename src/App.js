import { Header } from "./components/Header";
import { Main } from "./components/MainContent";
import { Footer } from "./components/Footer";
import {useDispatch, useSelector} from "react-redux";

export const App=()=> {
    const counter = useSelector((state) => state);
    const dispatch = useDispatch();

  return (
    <div className="App">
        <Header/>
        <hr/>
        <Main counter={counter} dispatch={dispatch} />
        <Footer/>
    </div>
  );
}



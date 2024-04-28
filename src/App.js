import { Header } from "./components/Header";
import { Main } from "./components/MainContent";
import { Footer } from "./components/Footer";

export const App=()=> {
  return (
    <div className="App">
        <Header/>
        <hr/>
        <Main/>
        <Footer/>
    </div>
  );
}



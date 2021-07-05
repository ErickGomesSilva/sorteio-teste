import GlobalStyle from "./styles/global"
import Navbar from "./components/Navbar/navbar";
import Routes from "./routes/index";

function App() {
  return (
    <>
      <Navbar/>  
      <Routes/>
      <GlobalStyle/>
    </>  
  );
}

export default App;

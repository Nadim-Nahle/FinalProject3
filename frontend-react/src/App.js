import NFTsWebsite from "./pages/NFTsWebsite";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<NFTsWebsite />}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;

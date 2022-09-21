import NFTsWebsite from "./pages/NFTsWebsite";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Missing from './pages/missing/Missing.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<NFTsWebsite />}></Route>
          {/*404 ROUTE*/}
          <Route path="*" element={<Missing />}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;

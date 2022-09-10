import NFTsWebsite from "./pages/NFTsWebsite";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeForm from "./pages/HomeForm/HomeForm";
import AboutForm from "./pages/AboutForm/AboutForm";
import FaqForm from "./pages/FaqForm/FaqForm";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<NFTsWebsite />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/homeform" element={<HomeForm />}></Route>
          <Route path="/aboutform" element={<AboutForm />}></Route>
          <Route path="/Faqform" element={<FaqForm />}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;

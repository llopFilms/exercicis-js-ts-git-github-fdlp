import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inici from "../pages/Inici/Inici";
import MissError from '../pages/MissError/MissError';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inici />} />
      <Route path="*" element={<MissError />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

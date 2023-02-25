import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import DisplayPage from "./files/homepage/displayPage/DisplayPage";
import Collections from "./files/homepage/collection/Collections";
import Construct from "./files/homepage/Construct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DisplayPage />} />
          <Route path="preview" element={<Collections />} />
          <Route path='radio' element={<Construct/>}/>
          <Route path='video' element={<Construct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import Inventory from "./Component/Inventory/Inventory";
import Notfound from "./Component/Not found/Notfound";
import Review from "./Component/Review/Review";


 function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route index element={<Header/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/review" element={<Review/>}/>
          <Route path="*" element={<Notfound />} />
          <Route path="/manage" element={<Inventory />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
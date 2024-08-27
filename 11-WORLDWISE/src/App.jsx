import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import AppLayout from "../pages/AppLayout";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import CityList from "../Components/CityList";
import CountryList from "../Components/CountryList";
import City from "../Components/City";
import Form from "../Components/Form";

import { CitiesProvider } from "./contexts/citiesContext";

function App() {
  return (
    <div>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Homepage />}></Route> */}
            <Route index element={<Homepage />}></Route>
            <Route path="pricing" element={<Pricing />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="app" element={<AppLayout />}>
              {/* <Route
              index
              element={<CityList citiesList={cities} isLoading={isLoading} />}
              ></Route> */}
              <Route index element={<Navigate to="cities" replace />}></Route>
              {/* Index route */}
              <Route path="cities" element={<CityList />}></Route>
              <Route path="cities/:id" element={<City />}></Route>
              <Route path="countries" element={<CountryList />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  );
}

export default App;

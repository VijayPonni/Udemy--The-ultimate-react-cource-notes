import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Homepage from '../pages/Homepage';
// import Product from '../pages/Product';
// import Pricing from '../pages/Pricing';
// import AppLayout from '../pages/AppLayout';
// import PageNotFound from '../pages/PageNotFound';
// import Login from '../pages/Login';

import CityList from '../Components/CityList';
import CountryList from '../Components/CountryList';
import City from '../Components/City';
import Form from '../Components/Form';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from '../pages/ProtectedRoute';
import SpinnerFullPage from '../Components/SpinnerFullPage';

import { CitiesProvider } from './contexts/citiesContext';

const Homepage = lazy(() => import('../pages/Homepage'));
const Product = lazy(() => import('../pages/Product'));
const Pricing = lazy(() => import('../pages/Pricing'));
const AppLayout = lazy(() => import('../pages/AppLayout'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Login = lazy(() => import('../pages/Login'));

function App() {
  return (
    <div>
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                {/* <Route path="/" element={<Homepage />}></Route> */}
                <Route index element={<Homepage />}></Route>
                <Route path='pricing' element={<Pricing />}></Route>
                <Route path='product' element={<Product />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route
                  path='app'
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* <Route
              index
              element={<CityList citiesList={cities} isLoading={isLoading} />}
              ></Route> */}
                  <Route
                    index
                    element={<Navigate to='cities' replace />}
                  ></Route>
                  {/* Index route */}
                  <Route path='cities' element={<CityList />}></Route>
                  <Route path='cities/:id' element={<City />}></Route>
                  <Route path='countries' element={<CountryList />}></Route>
                  <Route path='form' element={<Form />}></Route>
                </Route>
                <Route path='*' element={<PageNotFound />}></Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

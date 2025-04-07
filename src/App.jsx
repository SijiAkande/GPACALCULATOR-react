import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LandingPage from './pages/LandingPage';
import CalculationPage from './pages/CalculationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = { <MainLayout />}>
      <Route index element = {<LandingPage />} />
      <Route path = 'calculate' element = {<CalculationPage />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router = {router} />;
};

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MyRoutes from './assets/Routes/MyRoutes';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import ScrollToTop from './assets/Components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter basename="/"> {/* Set your base URL here */}
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {MyRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;



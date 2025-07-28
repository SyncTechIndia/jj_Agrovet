import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import MyRoutes from './assets/Routes/MyRoutes';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import ScrollToTop from './assets/Components/ScrollToTop';

// const App = () => {
//   return (
//     <Router basename="/"> {/* Set your base URL here */}
//       <Navbar />
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           {MyRoutes.map((route, index) => (
//             <Route key={index} path={route.path} element={route.element} />
//           ))}
//         </Routes>
//       </Suspense>
//       <Footer/>
//     </Router>
//   );
// };

// export default App;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
  <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HomePage />
              <ServicesSection />
              {/* <AboutUs /> */}
            
            </>
          } 
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
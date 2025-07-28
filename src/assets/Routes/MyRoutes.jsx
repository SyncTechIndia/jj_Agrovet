import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('../Components/Home'));
const ContactUs = lazy(() => import('../Components/Pages/Contactus'));
const About = lazy(() => import('../Components/Pages/Aboutus'));
const Product = lazy(() => import('../Components/Pages/Products'));
const Gallery = lazy(() => import('../Components/Pages/Gallery'));
const Career = lazy(() => import('../Components/Pages/Career'));

const MyRoutes = [
  { path: '/', element: <Home /> }, 
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/about', element: <About /> },
  { path: '/product', element: <Product /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/Career', element: <Career /> },
  { path: '*', element: <Navigate to="/" replace /> }, 
];

export default MyRoutes;

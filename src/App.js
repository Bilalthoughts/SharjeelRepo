import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Review from './pages/Review';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Illustration from './pages/Illustration';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "illustration",
        element: <Illustration />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blogdetails",
        element: <BlogDetails />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    
    ],

  },

]);
function App() {
  return (
  
  <>
  <RouterProvider router={router} />
    <div className="App">

    </div>
    </>
    );
    }
export default App;

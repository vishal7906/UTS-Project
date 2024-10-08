import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from './layout.jsx';
import BlogSection from './components/blogs.jsx';
import BlogDetail from './components/BlogPost.jsx';
import GetInTouch from './components/GetInTouch.jsx';
import AboutUs from './components/aboutus.jsx';
import Services from './components/services.jsx';
import Career from './components/Career.jsx';

// Define your router with routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="blog" element={<BlogSection />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/getintouch" element={<GetInTouch />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/career" element={<Career />} />
    </Route>
  )
);

function App() {
  return (
    // Provide the router to the application using RouterProvider
    <RouterProvider router={router} />
  );
}

export default App;

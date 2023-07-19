import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import App from './App';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';



// ReactDOM.createRoot(document.getElementById('root')).render(
//     <HashRouter>
//       <Routes>
//           <Route path='/' element={<Landing />}/>
//           <Route path='/about' element={<About />}/>
//           <Route path='/projects' element={<Projects />}/>
//           <Route path='*' element={<ErrorPage />}/>
//       </Routes>
//     </HashRouter>
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/adkins/about/",
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/adkins/projects/",
//     element: <Projects />,
//     errorElement: <ErrorPage />
//   }
// ])

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

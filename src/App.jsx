import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import About from './About'
import Portofolio from './Portofolio'
import Contact from './Contact'
import NotFound from './NotFound'


const routing = createHashRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "About", element: <About /> },
      { path: "Portofolio", element: <Portofolio /> },
      { path: "Contact", element: <Contact /> },
      { path: "", element: <NotFound /> }
    ],
  },
])


function App() {
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>

    </>
  )
}

export default App

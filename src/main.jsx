
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss'

//page components
import Home from './component/Home.jsx'
import HeroesIndex from './component/HeroesIndex.jsx'
import HeroSingle from './component/HeroSingle.jsx'

//loaders
import { getHeroSingle, getSuperHeroes } from "./utils/loader.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,


    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/heroes",
        element: <HeroesIndex />,
        loader: getSuperHeroes
      },
      {
        path: "/heroes/:id",
        element: <HeroSingle />,
        loader: async ({ params }) => getHeroSingle(params.id)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

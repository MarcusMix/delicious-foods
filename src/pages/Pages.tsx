//routes
import { Routes, Route, useLocation } from 'react-router-dom'

//pages
import Home from "./Home/Home"
import { Cuisine } from "./Cuisine/Cuisine"
import { Search } from "./Search/Search"
import { Recipe } from "./Recipe/Recipe"

//framer motion
import {AnimatePresence} from 'framer-motion'

const Pages = () => {

  const location = useLocation()

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
          <Route path="/searched/:search" element={<Search/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages
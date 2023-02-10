//routes
import { Routes, Route, useLocation } from 'react-router-dom'

//pages
import Home from "./Home/home.page"
import { Cuisine } from "./Cuisine/cuisine.page"
import { Search } from "./Search/search.page"
import { Recipe } from "./Recipe/recipe.page"

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
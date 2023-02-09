//router
import { BrowserRouter } from 'react-router-dom'

//components
import { Category } from './components/Category/category.component'
import { Search } from './components/Search/search.component'

//pages
import Pages from './pages/Pages'

//icons
import { GiKnifeFork}  from 'react-icons/gi'

//styles
import { Nav, Logo } from './style'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork/>
          <Logo to={'/'} >Delicioousss Food</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  )
}

export default App

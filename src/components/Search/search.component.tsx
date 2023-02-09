//icons
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

//styles
import { FormStyled } from './search.styles'

//router
import { useNavigate } from 'react-router-dom'

export const Search = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState<string>('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

  return (
    <FormStyled onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                value={input}
            />
        </div>
    </FormStyled>
  )
}

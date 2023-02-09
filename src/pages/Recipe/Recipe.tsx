//hooks
import { useEffect, useState } from 'react'

//router
import { useParams } from 'react-router-dom'

//styles
import { ButtonStyled, DetailWrapper, Info } from './recipe.style'

export const Recipe = () => {

  let params = useParams()

  const [details, setDetails] = useState<any>({})
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=2c1a78f029bc4d43ae7f8d0162b2328e`)
    
    const detailData = await data.json()
    console.log(detailData)
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details?.title}</h2>
        <img src={details?.image} alt={details?.title} />
      </div>
      <Info>

        <ButtonStyled  
          className={activeTab === 'instructions' ? 'active' : ''} 
          onClick={() => setActiveTab('instructions')}>
            Instructions
        </ButtonStyled>

        <ButtonStyled 
          className={activeTab === 'ingredients' ? 'active' : ''} 
          onClick={() => setActiveTab('ingredients')}>
            Ingredients
        </ButtonStyled>

        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: details?.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details?.instructions}}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
        <ul>
          {details.extendedIngredients.map((ingredient: any) => {
            return (
              <li key={ingredient.id}>{ingredient.original}</li>
            )
          })}
        </ul>
        )}
      </Info>
    </DetailWrapper>
  )
}

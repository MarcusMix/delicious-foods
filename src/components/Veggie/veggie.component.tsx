//hooks
import { useState, useEffect } from 'react'

//splide
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

//styles
import { Card, Gradient, Wrapper } from './veggie.styles'

const Veggie = () => {

  
  const [veggie, setVeggie] = useState<string[]>([])

  useEffect(() => {
    getVeggie()
  }, [])

  const getVeggie = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4e3f18fbe0c64fcea715c32a8163f177&number=9&tags=vegetarian`);
    const data = await api.json();
    console.log(data.recipes)
    setVeggie(data.recipes)
  }
  return (
    <Wrapper>
      <h3>Vegetarian Picks</h3>

      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem'
      }}>
        {veggie.map((recipe: any) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient/>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Wrapper>
  )
}

export default Veggie
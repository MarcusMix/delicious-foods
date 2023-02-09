//router
import { Link, useParams } from 'react-router-dom'

//hooks
import { useEffect, useState } from 'react'

//styles
import { Card, Grid } from './cuisine.styles'


export const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name:string) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2c1a78f029bc4d43ae7f8d0162b2328e&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type!)
        console.log(params.type)
    }, [params.type])

  return (
    <Grid 
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        {cuisine.map((item: any) => {
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
        
    </Grid>
  )
}

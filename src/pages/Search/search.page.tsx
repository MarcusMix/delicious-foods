//hooks
import { useEffect, useState } from "react";

//router
import { Link, useParams } from "react-router-dom";

//style
import { Card, Grid } from "./search.styles";

export const Search = () => {

    const [searchRecipes, setSearchRecipes] = useState([])
    
    let params = useParams()

    const getSearch = async (name:string) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2c1a78f029bc4d43ae7f8d0162b2328e&query=${name}`)
        const recipes = await data.json();
        setSearchRecipes(recipes.results)
    }


    useEffect(() => {
        getSearch(params.search!)
    }, [searchRecipes])

  return (
    <Grid>
        {searchRecipes.map((item: any) => {
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

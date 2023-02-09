import { useState, useEffect } from "react"

export const Popular = () => {

  const [popular, setPopular] = useState<string[]>([])

  useEffect(() => {
      getPopular()
  }, [])

  const getPopular = async () => {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=203254f6c49e462caa9c032a008c2fda&number=9`);
      const data = await api.json();
      console.log(data.recipes)
      setPopular(data.recipes)
  }
  
  return (
    <div>
      {popular.map((recipe: any) => {
        return (
          <div key={recipe.id}>{recipe.title}</div>
        )
      })}
    </div>
  )
}

export default Popular
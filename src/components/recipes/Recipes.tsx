import React, {FC, useEffect, useState} from 'react';
import Recipe,{IRecipeProps,IRecipeTypeProps} from "../recipe/Recipe";


const Recipes:FC  = () => {


const[recipes,setResipes]=useState <IRecipeProps []>  ([]);//це масив повертає геттер і сеттер
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes')
        .then(value => value.json())
        .then(({recipes})=> {
          setResipes(recipes);
        });
  },[]);


    return (
        <div>
            {
                recipes.map(({id,name,cuisine,instructions,mealType,image}) =>
                    (<Recipe key={id}
                             id={id}
                             name={name}
                             cuisine={cuisine}
                             mealType={mealType}
                             instructions={instructions}
                             image={image}/>))
            }
        </div>
    );
};

export default Recipes ;
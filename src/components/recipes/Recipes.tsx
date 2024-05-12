import React, {FC, useEffect, useState} from 'react';
import Recipe,{} from "../recipe/Recipe";
import {getAllrecipes} from "../../services/recipes.api.service";
import {IRecipeProps} from "../../models/Recipe";



const Recipes:FC  = () => {


const[recipes,setResipes]=useState <IRecipeProps []>  ([]);//це масив повертає геттер і сеттер
    useEffect(() => {
        getAllrecipes().then(value => setResipes(value.data))
    }, []);


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
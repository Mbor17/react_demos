import React, {FC} from 'react';
import {json} from "stream/consumers";
export  interface IRecipeProps {

    "id"?: number,
    "name"?: string,
    "ingredients"?: string[],
    "instructions"?: string[],
    "prepTimeMinutes"?: number,
    "cookTimeMinutes"?: number,
    "servings"?: number,
    "difficulty"?: string,
    "cuisine"?: string,
    "caloriesPerServing"?: string,
    "tags"?: string[],
    "userId"?: string,
    "image"?: string,
    "rating"?: number,
    "reviewCount"?: number,
    "mealType"?: string[]
}
 export type IRecipeTypeProps=IRecipeProps & {children?:React.ReactNode}
const Recipe:FC<IRecipeTypeProps>  = ({
                                          id,
                                          name,
                                          mealType,
                                          cuisine,
                                          instructions,
                                          image}) => {
    return (
        <div>
            <h2>{name}.{mealType}.{cuisine}</h2>
            <img src={image} alt={name}/>
            <ul>
                {
                    instructions?.map((instruction,index) => <li key={index}>{instruction}</li>)
                }
            </ul>
        </div>
    );
};

export default Recipe;
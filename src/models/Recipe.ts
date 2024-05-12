
export  interface IRecipeProps {

    id: number,
    name?: string,
    ingredients?: string[],
    instructions?: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: string,
    cuisine?: string,
    caloriesPerServing?: string,
    tags?: string[],
    userId?: string,
    image?: string,
    rating?: number,
    reviewCount?: number,
    mealType: string[]
}
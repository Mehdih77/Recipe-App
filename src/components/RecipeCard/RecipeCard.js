import React from 'react';
import './RecipeCard.css'

export default function RecipeCard({ title, img, calories, ingredients }) {
    
    return (
        <div className='col-md-5 my-4 recipe-card-container'>
                <div className='recipe-card'>
                    <img
                        src={img}
                        alt="recipe food green"/>
                    <h4>{title}</h4>
                    <p className={`${calories}`> 2000 ? "calories-red" : "calories-green"}>Calories: {calories.toFixed(0)}</p>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                            ))}
                    </ol>
                </div>
        </div>
    )
}

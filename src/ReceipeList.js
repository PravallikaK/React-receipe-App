import React from 'react'

export default function ReceipeList({title, image, calories, ingredients}) {
    return (
        <div style = {{  backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',border: 'none', padding:15, margin:10}}>
            <h1>{title}</h1>
            <img src ={image} alt='imageeshere' />
            <p>calories: {calories}</p>
            <ul style = {{ listStyleType: 'none'}}>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ul>
        </div>
    )
}
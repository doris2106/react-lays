import React, { useState } from 'react'

const recipeData = {
  title: 'Lay\'s Crispy Snack Mix',
  ingredients: [
    'Lay\'s Classic Crisps - 2 bags',
    'Cashews - 1 cup',
    'Dried cranberries - 3/4 cup',
    'Honey - 3 tablespoons',
    'Olive oil - 2 tablespoons',
    'Sea salt - 1 teaspoon',
    'Black pepper - 1/2 teaspoon',
    'Garlic powder - 1/2 teaspoon',
    'Paprika - 1/4 teaspoon',
    'Dried rosemary - 1/2 teaspoon',
    'Chili flakes - 1/4 teaspoon',
    'Dark chocolate chips - 1 cup',
    'Pumpkin seeds - 1/2 cup',
    'Coconut flakes - 1/3 cup',
  ],
  instructions: [
    'Preheat oven to 300°F (150°C) and line a baking sheet with parchment paper.',
    'In a large bowl, combine Lay\'s crisps, cashews, and seeds. Gently mix to avoid crushing.',
    'In a small bowl, whisk together honey, olive oil, and all seasonings until well combined.',
    'Drizzle the honey mixture over the crisp mixture and toss gently to coat evenly.',
    'Spread the mixture on the prepared baking sheet and bake for 15-20 minutes, stirring halfway through.',
    'Remove from oven, let cool completely, then fold in chocolate chips and coconut flakes.'
  ],
  related: [
    { id: 1, name: 'Spicy Snack Mix', img: 'r1.png' },
    { id: 2, name: 'Sweet & Salty Blend', img: 'rr.png' },
    { id: 3, name: 'Garden Fresh Salad', img: 'r2.png' }
  ]
}

export default function RecipePage() {
  const [checkedIngredients, setCheckedIngredients] = useState({})

  const toggleIngredient = (index) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="recipe-page">
      <div className="section-container">
        <div className="recipe-layout">
          {/* LEFT PANEL */}
          <div className="recipe-main">
            <h1>{recipeData.title}</h1>

            {/* INGREDIENTS */}
            <section className="recipe-section">
              <h2>Ingredients</h2>
              <div className="ingredients-list">
                {recipeData.ingredients.map((ingredient, i) => (
                  <label key={i} className="ingredient-item">
                    <input 
                      type="checkbox" 
                      checked={checkedIngredients[i] || false}
                      onChange={() => toggleIngredient(i)}
                    />
                    <span>{ingredient}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* INSTRUCTIONS */}
            <section className="recipe-section">
              <h2>Instructions</h2>
              <ol className="instructions-list">
                {recipeData.instructions.map((step, i) => (
                  <li key={i}><strong>Step {i + 1}:</strong> {step}</li>
                ))}
              </ol>
            </section>
          </div>

          {/* RIGHT PANEL */}
          <aside className="recipe-sidebar">
            <h3>Related Recipes</h3>
            <div className="related-recipes">
              {recipeData.related.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                  <img src={`/${recipe.img}`} alt={recipe.name} />
                  <p>{recipe.name}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

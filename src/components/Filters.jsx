export default function Filters({
  categories,
  selectedCategories,
  handleCategoryChange,
  areas,
  selectedAreas,
  handleAreaChange,
  ingredients,
  selectedIngredients,
  handleIngredientChange,
  tags,
  selectedTags,
  handleTagChange,
  mealsSortBy,
  setMealsSortBy,
}) {
  return (
    <div className="filter-container">
      <div className="dropdown category-dropdown">
        <button className="dropdown-button">Category</button>
        <div className="dropdown-content">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="dropdown area-dropdown">
        <button className="dropdown-button">Area</button>
        <div className="dropdown-content">
          {areas.map((area) => (
            <label key={area}>
              <input
                type="checkbox"
                checked={selectedAreas.includes(area)}
                onChange={() => handleAreaChange(area)}
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      <div className="dropdown ingredient-dropdown">
        <button className="dropdown-button">Ingredients</button>
        <div className="dropdown-content">
          {ingredients.map((ingredient) => (
            <label key={ingredient} className="ingredient-item">
              <input
                type="checkbox"
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => handleIngredientChange(ingredient)}
              />
              {ingredient}
            </label>
          ))}
        </div>
      </div>

      <div className="dropdown tag-dropdown">
        <button className="dropdown-button">Tags</button>
        <div className="dropdown-content">
          {tags.map((tag) => (
            <label key={tag} className="tag-item">
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagChange(tag)}
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <select
          className="dropdown-button"
          id="meal-sort"
          value={mealsSortBy}
          onChange={(e) => setMealsSortBy(e.target.value)}
        >
          <option value="idMeal">Sort by latest</option>
          <option value="strMeal">Sort by name</option>
        </select>
      </div>
    </div>
  );
}

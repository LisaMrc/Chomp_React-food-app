import "./App.css";
import { useState, useMemo, useEffect } from "react";
import MealsData from "./data/MealsData";
import NewsSlider from "./components/NewsSlider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MealGallery from "./components/MealGallery";

function getStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : fallback;
  } catch (e) {
    return fallback;
  }
}

export default function App() {
  const [search, setSearch] = useState(() => getStored("search", ""));
  const [mealsSortBy, setMealsSortBy] = useState(() =>
    getStored("mealsSortBy", "idMeal")
  );

  const [selectedCategories, setSelectedCategories] = useState(() =>
    getStored("selectedCategories", [])
  );
  const [categories, setCategories] = useState([]);

  const [selectedAreas, setSelectedAreas] = useState(() =>
    getStored("selectedAreas", [])
  );
  const [areas, setAreas] = useState([]);

  const [selectedIngredients, setSelectedIngredients] = useState(() =>
    getStored("selectedIngredients", [])
  );
  const [ingredients, setIngredients] = useState([]);

  const [selectedTags, setSelectedTags] = useState(() =>
    getStored("selectedTags", [])
  );
  const [tags, setTags] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    setCategories([...new Set(MealsData.map((meal) => meal.strCategory))]);
    setAreas([...new Set(MealsData.map((meal) => meal.strArea))]);

    const allIngredients = new Set();
    MealsData.forEach((meal) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]?.trim();
        if (ingredient) allIngredients.add(ingredient);
      }
    });
    setIngredients([...allIngredients].sort());

    const allTags = new Set();
    MealsData.forEach((meal) => {
      if (meal.strTags) {
        meal.strTags.split(",").forEach((tag) => allTags.add(tag.trim()));
      }
    });
    setTags([...allTags].sort());
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("mealsSortBy", JSON.stringify(mealsSortBy));
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
    localStorage.setItem("selectedAreas", JSON.stringify(selectedAreas));
    localStorage.setItem(
      "selectedIngredients",
      JSON.stringify(selectedIngredients)
    );
    localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
  }, [
    search,
    mealsSortBy,
    selectedCategories,
    selectedAreas,
    selectedIngredients,
    selectedTags
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleAreaChange = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleTagChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredMealsData = useMemo(() => {
    return MealsData.filter((meal) => {
      const mealIngredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          mealIngredients.push(meal[`strIngredient${i}`].trim());
        }
      }

      const mealTags = meal.strTags
        ? meal.strTags.split(",").map((tag) => tag.trim())
        : [];

      return (
        meal.strMeal.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(meal.strCategory)) &&
        (selectedAreas.length === 0 || selectedAreas.includes(meal.strArea)) &&
        (selectedIngredients.length === 0 ||
          selectedIngredients.every((ing) => mealIngredients.includes(ing))) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => mealTags.includes(tag)))
      );
    }).sort((a, b) =>
      mealsSortBy === "idMeal"
        ? (a.idMeal || 0) - (b.idMeal || 0)
        : a.strMeal.localeCompare(b.strMeal)
    );
  }, [
    search,
    mealsSortBy,
    selectedCategories,
    selectedAreas,
    selectedIngredients,
    selectedTags
  ]);

  return (
    <div>
      <Navbar />
      <Header />

      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a meal..."
        />
      </div>

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

      <MealGallery
        meals={filteredMealsData}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />

      <NewsSlider />
      <Footer />
    </div>
  );
}

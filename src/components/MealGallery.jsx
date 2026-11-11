import MealCard from "./MealCard";

export default function MealGallery({
  meals,
  loading,
  error,
  favorites,
  onToggleFavorite,
  isFiltering,
  onResetFilters,
}) {
  if (loading) {
    return <p className="meal-status" role="status">Loading meals…</p>;
  }

  if (error) {
    return (
      <p className="meal-status" role="alert">
        Couldn’t load the meals. Check your connection, then reload the page.
      </p>
    );
  }

  if (meals.length === 0) {
    return (
      <div className="meal-status">
        <p>No meal matches your search.</p>
        {isFiltering && (
          <button type="button" onClick={onResetFilters}>
            Reset filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div id="meal-gallery">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          idMeal={meal.idMeal}
          strMeal={meal.strMeal}
          strArea={meal.strArea}
          strMealThumb={meal.strMealThumb}
          isFavorite={favorites.includes(meal.idMeal)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

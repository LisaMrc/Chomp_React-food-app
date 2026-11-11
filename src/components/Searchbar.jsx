export default function Searchbar({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a meal..."
      />
    </div>
  );
}

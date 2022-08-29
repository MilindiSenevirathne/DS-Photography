import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((image) => image.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre]);

  console.log(activeGenre)
 
  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 1 ? "active" : ""} onClick={() => setActiveGenre(1)}>Comedy</button>
      <button className={activeGenre === 2 ? "active" : ""} onClick={() => setActiveGenre(2)}>Action</button>
    </div>
  );
}

export default Filter;

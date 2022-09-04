import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    const filtered = popular.filter((image) =>
      image.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <a
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Fine Art
      </a>
      <a
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
      >
        Nature
      </a>
      <a
        className={activeGenre === 3 ? "active" : ""}
        onClick={() => setActiveGenre(3)}
      >
        Modern
      </a>
      <a
        className={activeGenre === 4 ? "active" : ""}
        onClick={() => setActiveGenre(4)}
      >
        Love
      </a>
    </div>
  );
}

export default Filter;

import { useEffect } from "react";

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((image) =>
      image.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  console.log(activeGenre);

  return (
    <div className="filter-container">
      <a
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        Fine Art
      </a>
      <a
        className={activeGenre === 1 ? "active" : ""}
        onClick={() => setActiveGenre(1)}
      >
        Nature
      </a>
      <a
        className={activeGenre === 2 ? "active" : ""}
        onClick={() => setActiveGenre(2)}
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

import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, popular}){
    return(
        <div className="filter-container">
            <button onClick={()=>setActiveGenre(0)}>All</button>
            <button onClick={()=>setActiveGenre(1)}>Comedy</button>
            <button onClick={()=>setActiveGenre(2)}>Action</button>
        </div>
    )
}

export default Filter;
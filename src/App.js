import React, { useState } from "react";
import { SearchBox } from "./component/SearchBox";
import { SearchResults } from "./component/SearchResult";
import data from "./data/result.json"
import "./style/style.css"

function App() {
  const [query, setQuery] = useState("");
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="app-wrapper">
      <SearchBox value={query} onChange={setQuery} />
      <SearchResults results={filtered} />
    </div>
  );
}

export default App;
import axios from "axios";
import { useState } from 'react';
import "../Components/ImageSearcher.css"


const Image = () => {
    const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    if (!query) return;

    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=NDB1nL6gZMEfliBAvt09sevfAj4-LfV3zS--nMqhxGI`
    );

    setImages(res.data.results);
  };

  return (
    <div>
      <div className="app">
      <h1>Image Searcher App</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchImages}>Search</button>
      </div>
      <div className="image-list">
        {images.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.urls.small} alt="img" />
          </div>
        ))}
      </div>
    </div>
          
    </div>
    </div>
  )
}

export default Image

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce";
import { useBaseURL } from "../hooks/useBaseURL";

const LogoSearch = () => {
  const [query, setQuery] = useState(""); // Search query state
  const [suggestions, setSuggestions] = useState([]); // Suggestions state
  const [showSuggestions, setShowSuggestions] = useState(false); // Control suggestion box visibility
  const navigate = useNavigate(); // Hook to navigate to another page
  const { baseURL } = useBaseURL();

  // Generate search queries based on input
  const generateSearchQueries = (query) => {
    const queryParts = query.split(" ");
    const searchQueries = [];
    searchQueries.push(query);

    if (queryParts.length > 1) {
      searchQueries.push(`${queryParts[0]} ${queryParts[1]}`);
      searchQueries.push(`${queryParts[1]} ${queryParts[0]}`);
    }

    const charCombinations = query.split("").map((char) => `${char} logo`);
    searchQueries.push(...charCombinations);

    return searchQueries;
  };

  // Debounced function to fetch suggestions
  const debouncedFetchSuggestions = debounce(async (query) => {
    if (query.length > 0) {
      try {
        const searchQueries = generateSearchQueries(query);
        const results = [];
        for (let searchTerm of searchQueries) {
          const response = await axios.get(
            `${baseURL}/api/search?query=${searchTerm}`
          );
          results.push(...response.data);
        }

        // Remove duplicates based on title or some unique property (e.g., _id)
        const uniqueResults = Array.from(
          new Map(results.map((logo) => [logo._id, logo])).values()
        );

        // Set suggestions to state
        setSuggestions(uniqueResults.slice(0, 7)); // Limit to 7 suggestions
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if query is empty
    }
  }, 500); // Delay before making the request

  // Handle search query change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true); // Show suggestions when typing
    debouncedFetchSuggestions(value); // Trigger the debounced fetch
  };

  // Handle Enter key press to trigger search
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      // Redirect to SearchedData component with the query
      navigate(`/searched-data?query=${query}`);
      setShowSuggestions(false); // Hide suggestions after Enter key press
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title); // Set query to the clicked suggestion title
    setSuggestions([]); // Clear suggestions after selection
    setShowSuggestions(false); // Hide suggestions after selecting a suggestion
    navigate(`/searched-data?query=${suggestion.title}`); // Navigate to the search results page
  };

  // Handle input focus to show suggestions
  const handleFocus = () => {
    if (query.length > 0) {
      setShowSuggestions(true); // Show suggestions when input field is focused
    }
  };

  // Handle input blur to hide suggestions (optional)
  const handleBlur = () => {
    // Optional: Delay to allow click on suggestion before hiding
    setTimeout(() => setShowSuggestions(false), 100);
  };

  return (
    <div className="">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus} // Show suggestions when the input is focused
          onBlur={handleBlur} // Hide suggestions when the input loses focus
          className="rounded-full pl-3 px-4 outline-none border border-white bg-dark-green text-white font-sf-regular w-[272px]"
          placeholder="Search for logos..."
        />

        {/* Suggestions Box */}
        {showSuggestions && query.length > 0 && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 bg-white shadow-md rounded-md mt-1">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion._id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-200 text-dark-green border-b px-3"
              >
                {suggestion.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoSearch;

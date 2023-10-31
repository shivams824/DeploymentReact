import React from 'react';
import "./Searchbox.css"
interface SearchBoxProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, onSearch }) => {
  return (
    <div >
      <input
        type="text"
        placeholder="Search ..."
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;

import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, SearchForm, Input, ButtonSubmit } from './Searchbar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export function Searchbar({ onSubmit, prevQuery }) {
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter search data');
      return;
    }
    if (prevQuery.toLowerCase() === query.toLowerCase()) {
      toast.error('Please enter a new search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <Header className="searchbar">
      <SearchForm onSubmit={handleSubmit} className="form">
        <Input
          onChange={handleSearch}
          value={query}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <ButtonSubmit type="submit" className="button">
          <HiMagnifyingGlass size="24" />
          Search
        </ButtonSubmit>
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  prevQuery: PropTypes.string.isRequired,
};

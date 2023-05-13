import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, SearchForm, Input, ButtonSubmit } from './Searchbar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export class Searchbar extends React.Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearch = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { prevQuery, onSubmit } = this.props;

    if (query.trim() === '') {
      return toast.error('Please enter search data');
    }
    if (prevQuery.toLowerCase() === query.toLowerCase()) {
      return toast.error('Please enter a new search query');
    }

    onSubmit(query);
    // this.setState({ query: '' });
  };

  render() {
    const { handleSubmit, handleSearch } = this;
    const { query } = this.state;

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
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

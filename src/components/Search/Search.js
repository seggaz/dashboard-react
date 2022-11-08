import React from 'react';
import searchIcon from '../../assets/img/search 1.svg';
import styles from './Search.module.scss';

const Search = ({searchItem, setSearchItem}) => {
	
	return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formTitle}>
        <p className={styles.titleHead}>All Customers</p>
        <p className={styles.titleActive}>Active Members</p>
      </div>
      <img src={searchIcon} alt="" />
      <input
        type="text"
        id="search"
        placeholder="Search"
        role="searchbox"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </form>
  );
};

export default Search;
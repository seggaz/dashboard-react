import searchIcon from '../../assets/img/search 1.svg';
import styles from './Search.module.scss';

const Search = ({handleSearch, searchText}) => {
	
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
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
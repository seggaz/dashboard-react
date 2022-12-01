import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search1.svg';

const Search = ({handleSearch, searchText}) => (
        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formTitle}>
            <h1 className={styles.titleHead}>All Customers</h1>
            <h2 className={styles.titleActive}>Active Members</h2>
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

export default Search;
import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.filterText}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

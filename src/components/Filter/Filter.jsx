import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'redux/contacts/filterSlice';

export default function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={e =>
          dispatch(filterActions.filterContacts(e.currentTarget.value))
        }
      />
    </>
  );
}

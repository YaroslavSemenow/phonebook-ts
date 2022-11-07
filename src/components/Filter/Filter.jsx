import useContacts from 'hooks/useContacts';
import { DebounceInput } from 'react-debounce-input';

export default function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <>
      <p>Find contacts by name</p>
      <DebounceInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        debounceTimeout={400}
      />
    </>
  );
}

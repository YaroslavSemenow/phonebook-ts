import useContacts from 'hooks/useContacts';

export default function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </>
  );
}

import { TextField } from '@mui/material';
import useContacts from 'hooks/useContacts';

export default function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <TextField
      type="text"
      name="filter"
      variant="filled"
      size="small"
      sx={{ marginBottom: '25px' }}
      label="Find contacts by name"
      value={filter}
      onChange={e => setFilter(e.target.value)}
    ></TextField>
  );
}

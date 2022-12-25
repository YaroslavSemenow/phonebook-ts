import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Container,
  Typography,
  Box,
} from '@mui/material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(authSelectors.getIsLoading);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={handleChange}
                autoFocus
                type="email"
                label="Email"
                name="email"
                value={email}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                fullWidth
                name="password"
                value={password}
                label="Password"
                type="password"
                required
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            fullWidth
            loading={isLoading}
            loadingIndicator="Please wait..."
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log in
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="../register" style={{ color: 'rgb(22, 102, 183)' }}>
                <Typography variant="body2" component="span">
                  New to Phonebook? Create an account
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

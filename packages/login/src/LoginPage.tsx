import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import styled from 'styled-components';
import { styled as styledMUI } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import logo from './assets/img/logo.png';

const DivPaperStyled = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonStyled = styledMUI(Button)`
  margin: 1rem 0;
`;

export type LoginPageProps = {
  onSubmit?: (data: { userName: string; password: string }) => void;
};

export default function LoginPage(props: LoginPageProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit({ userName, password });
    setUserName('');
    setPassword('');
  };

  const userNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <DivPaperStyled>
        <img src={logo} />
        <Typography component="h1" variant="h5">
          {t('login:title')}
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('login:emailAddress')}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={userNameHandler}
            value={userName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('login:password')}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={passwordHandler}
            value={password}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={t('login:rememberMe')} />
          <ButtonStyled type="submit" fullWidth variant="contained" color="primary">
            {t('login:signIn')}
          </ButtonStyled>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t('login:forgotPassword')}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {t('login:signup')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </DivPaperStyled>
    </Container>
  );
}

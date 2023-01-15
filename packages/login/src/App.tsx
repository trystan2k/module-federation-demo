import LoginPage, { LoginPageProps } from './LoginPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../utils/i18n';

const LoginMFE = (props: LoginPageProps) => <LoginPage {...props} />;

export default LoginMFE;

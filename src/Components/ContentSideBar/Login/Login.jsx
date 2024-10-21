import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Login() {
    const { container, boxTitle, boxSubmit, forgotPassword, boxCheck } = styles;
    return (
        <div className={container}>
            <div className={boxTitle}>SIGN IN</div>
            <InputCommon label={'Username or email'} type={'text'} />
            <InputCommon label={'Password'} type={'password'} />

            <div className={boxCheck}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>

            <div className={boxSubmit}>
                <Button content={'LOGIN'} isPrimaryBtn={true} />
            </div>

            <div className={forgotPassword}>Lost your password?</div>
        </div>
    );
}

export default Login;

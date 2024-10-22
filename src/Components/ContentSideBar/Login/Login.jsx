import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Value } from 'sass';

function Login() {
    const { container, boxTitle, boxSubmit, forgotPassword, boxCheck } = styles;

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is requied'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required')
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    });

    console.log(formik.errors);
    return (
        <div className={container}>
            <div className={boxTitle}>SIGN IN</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label={'Username or email'}
                    type={'text'}
                    isRequired
                    formik={formik}
                />
                <InputCommon
                    id='password'
                    label={'Password'}
                    type={'password'}
                    isRequired
                    formik={formik}
                />

                <div className={boxCheck}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>

                <div className={boxSubmit}>
                    <Button
                        content={'LOGIN'}
                        isPrimaryBtn={true}
                        type='submit'
                    />
                </div>
            </form>
            <div className={forgotPassword}>Lost your password?</div>
        </div>
    );
}

export default Login;

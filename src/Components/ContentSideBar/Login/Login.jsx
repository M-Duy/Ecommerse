import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Value } from 'sass';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';

function Login() {
    const { container, boxTitle, boxSubmit, forgotPassword, boxCheck } = styles;
    const { toast } = useContext(ToastContext);
    const [isRegister, setIsRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is requied'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: (value) => {
            formik.resetForm();
            console.log(value);
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    console.log(formik.errors);
    return (
        <div className={container}>
            <div className={boxTitle}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
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
                {isRegister && (
                    <InputCommon
                        id='cfpassword'
                        label={'Confirm password'}
                        type={'password'}
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxCheck}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <div className={boxSubmit}>
                    <Button
                        content={isRegister ? 'REGISTER' : 'LOGIN'}
                        isPrimaryBtn={true}
                        type='submit'
                        onClick={() => toast.success('Success')}
                    />
                </div>
            </form>
            <Button
                content={
                    isRegister
                        ? 'Already have an account?'
                        : "Don't have an account?"
                }
                isSecondBtn={true}
                type='submit'
                onClick={handleToggle}
            />
            {!isRegister && (
                <div className={forgotPassword}>Lost your password?</div>
            )}
        </div>
    );
}

export default Login;

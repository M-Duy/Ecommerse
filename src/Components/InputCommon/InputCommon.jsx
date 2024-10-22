import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { labelC, boxInput, boxIcon, box, errMsg } = styles;
    const { formik, id } = props;
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const isPassword = type === 'password';
    const isShowPassword =
        type === 'password' && !isHiddenPassword ? 'text' : type;
    const handleTogglePassword = () => {
        setIsHiddenPassword(!isHiddenPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messageErr = formik.errors[id];

    // console.log(props)
    return (
        <div className={box}>
            <div className={labelC}>
                {label}
                {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleTogglePassword}>
                        {isHiddenPassword ? <FiEye /> : <FiEyeOff />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messageErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;

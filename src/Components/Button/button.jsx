import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimaryBtn, isSecondBtn, ...props }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimaryBtn,
                [secondaryBtn]: isSecondBtn
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;

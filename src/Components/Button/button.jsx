import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimaryBtn, isSecondBtn }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimaryBtn,
                [secondaryBtn]: isSecondBtn
            })}
        >
            {content}
        </button>
    );
}

export default Button;

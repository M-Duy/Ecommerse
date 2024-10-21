import styles from './styles.module.scss';

function HeaderSideBar({ icon, title }) {
    const { container, headTitle } = styles;
    return (
        <div className={container}>
            {icon}
            <div className={headTitle}>{title}</div>
        </div>
    );
}

export default HeaderSideBar;

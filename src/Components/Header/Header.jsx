import { dataBoxIcon, dataMenu } from '@components/Header/constants';
import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/spinIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function Header() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        boxLogo
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div className={boxLogo}>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <img src={reLoadIcon} alt='reLoadIcon' />
                        <img src={heartIcon} alt='heartIcon' />
                        <img src={cartIcon} alt='cartIcon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

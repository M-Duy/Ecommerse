import { dataBoxIcon, dataMenu } from '@components/Header/constants';
import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import Menu from '@components/Header/Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/spinIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import heartIcon from '@icons/svgs/heartIcon.svg';
import { FaRegHeart } from 'react-icons/fa6';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SidaBarContext } from '@/contexts/SideBarProvider';

function Header() {
    const {
        container,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        boxLogo,
        fixedHeader,
        topHeader,
        iconCart
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType } = useContext(SidaBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        //Cách 1:
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }

        //Cách 2:
        // setFixedPosition(scrollPosition > 80 ? true : false)

        //Cách 3:
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
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
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            onClick={() => handleOpenSideBar('compare')}
                        />
                        <FaRegHeart
                            onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCart
                            className={iconCart}
                            onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

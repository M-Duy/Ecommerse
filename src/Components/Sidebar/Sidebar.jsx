import styles from './styles.module.scss';
import { SidaBarContext } from '@/contexts/SideBarProvider';
import { useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
import classNames from 'classnames';

function Sidebar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SidaBarContext);

    const handleClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleClose}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleClose}>
                        <IoIosClose />
                    </div>
                )}
                SideBar
            </div>
        </div>
    );
}

export default Sidebar;

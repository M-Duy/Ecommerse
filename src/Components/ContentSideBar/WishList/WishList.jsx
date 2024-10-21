import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { FaRegHeart } from 'react-icons/fa6';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function WishList() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<FaRegHeart />} title='wishlist' />
                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={'View COMPARE'} isPrimaryBtn={true} />
                <Button content={'ADD ALL TO CART'} isSecondBtn={true} />
            </div>
        </div>
    );
}

export default WishList;

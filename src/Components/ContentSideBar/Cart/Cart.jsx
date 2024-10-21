import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import { PiShoppingCart } from 'react-icons/pi';

function Cart() {
    const { container, totalCl, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<PiShoppingCart />} title='CART' />
                <ItemProduct />
            </div>

            <div>
                <div className={totalCl}>
                    <p>SUBTOTAL:</p>
                    <p>$199.99</p>
                </div>
                <div className={boxBtn}>
                    <Button content={'VIEW CART'} isPrimaryBtn={true} />
                    <Button content={'CHECKOUT'} isSecondBtn={true} />
                </div>
            </div>
        </div>
    );
}
export default Cart;

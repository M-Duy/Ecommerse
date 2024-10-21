import styles from './styles.module.scss';
import Img1 from '@/assets/images/Image_1.jpeg';
import { IoIosClose } from 'react-icons/io';

function ItemProduct() {
    const { container, boxContent, boxImg, titleCl, priceCl, boxIcon } = styles;
    return (
        <div className={container}>
            <div className={boxImg}>
                <img src={Img1} alt='' />
            </div>
            <div className={boxIcon}>
                <IoIosClose />
            </div>
            <div className={boxContent}>
                <div className={titleCl}>title of product</div>
                <div className={priceCl}>$199.99</div>
            </div>
        </div>
    );
}

export default ItemProduct;

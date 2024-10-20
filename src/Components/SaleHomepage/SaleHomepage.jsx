import styles from './styles.module.scss';
import Img1 from '@/assets/images/Image_1.jpeg';
import Img2 from '@/assets/images/Image_2.jpeg';
import Button from '@components/Button/Button';
import useTranslateX from '@components/SaleHomepage/TranslateX';

function SaleHomepage() {
    const { container, title, des, boxBtn, boxImg } = styles;
    const { translateXPosition } = useTranslateX();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img src={Img1} alt='' />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={boxBtn}>
                    <Button content={'Read more'} isSecondBtn={true} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: `transform 0.6s ease`
                }}
            >
                <img src={Img2} alt='' />
            </div>
        </div>
    );
}

export default SaleHomepage;

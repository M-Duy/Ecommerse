import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <div className={des}>
                    Make your celebrations even more special this years with
                    beautiful.
                </div>
                <div className={boxBtn}>
                    <Button content={'Go to shop'} isPrimaryBtn={true} />
                </div>
            </div>
        </div>
    );
}

export default Banner;

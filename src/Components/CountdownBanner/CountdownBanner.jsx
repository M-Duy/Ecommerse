import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';

function CountdownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2024-12-31T00:00:00';
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} isPrimaryBtn={true} />
            </div>
        </div>
    );
}

export default CountdownBanner;

import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import ImgLogo from '@/assets/images/marseille-logo.png';
import ImgPaymethod from '@/assets/images/PayMethod.png';

function Footer() {
    const { container, boxLogo, boxNav, payMethod, des } = styles;
    return (
        <div className={container}>
            <div className={boxLogo}>
                <img src={ImgLogo} alt='' />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>
            <div className={payMethod}>
                <p>Guaranteed safe checkout</p>
                <img src={ImgPaymethod} alt='' />
            </div>
            <div className={des}>
                Copyright © 2024 HLTCD theme. Created by HLTCD
            </div>
        </div>
    );
}

export default Footer;

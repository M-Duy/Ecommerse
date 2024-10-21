import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
    const { container, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<TfiReload />} title='Compare' />
                <ItemProduct />
            </div>

            <div>
                <Button content={'VIEW COMPARE'} isPrimaryBtn={true} />
            </div>
        </div>
    );
}

export default Compare;

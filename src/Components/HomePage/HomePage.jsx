import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import styles from './styles.module.scss';
import HeadingListProducts from '@components/HeadingListProduct/HeadingListProducts';
import PopularProducts from '@components/PopularProduct/PopularProducts';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productsService';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProducts(res.contents);
        });
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProducts data={listProducts.slice(0, 2)} />
            <PopularProducts
                data={listProducts.slice(2, listProducts.length)}
            />
            <SaleHomepage />
            <div style={{ height: '200px' }}></div>
        </>
    );
}

export default HomePage;

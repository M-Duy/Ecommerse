import ProductItems from '@components/ProductItem/ProductItems';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';

function PopularProducts({ data }) {
    const { container } = styles;
    console.log(data);

    return (
        <MainLayout>
            <div className={container}>
                {data.map((item) => (
                    <ProductItems
                        key={item.id}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

export default PopularProducts;

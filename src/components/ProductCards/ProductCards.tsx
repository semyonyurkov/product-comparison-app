import styles from './ProductCards.module.css';
import { Card } from '../Card/Card';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { selectProducts } from '../../redux/slices/products';

export const ProductCards = () => {
    const products = useSelector((state: IState) => selectProducts(state));
    const cardsProducts = products.map((product, index) => {
        return (
            <div key={product.id} className={styles.phoneContainer}>
                <Card
                    id={product.id}
                    title={product.title}
                    image={product.image}
                />
            </div>
        );
    });
    return <>{cardsProducts}</>;
};

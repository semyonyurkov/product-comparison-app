import styles from './ProductCards.module.css';
import { Card } from '../Card/Card';
export const ProductCards = () => {
    return (
        <div className={styles.phoneContainer}>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

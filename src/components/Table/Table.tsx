import { useSelector } from 'react-redux';
import styles from './Table.module.css';
import { selectProducts } from '../../redux/slices/products';
import { IState } from '../../redux/store';

export const Table = () => {
    const products = useSelector((state: IState) => selectProducts(state));

    const newProducts = products.map((product, index) => {
        return (
            <>
                <th key={index}>{product.title}</th>
            </>
        );
    });
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tr>
                    <th>{products[0].properties[0].title}</th>
                    <td>{newProducts}</td>
                </tr>
                <tr>
                    <th>{products[0].properties[1].title}</th>
                </tr>
            </table>
        </div>
    );
};

import { useSelector } from 'react-redux';
import styles from './Popover.module.css';
import { useState } from 'react';
import { selectProducts } from '../../redux/slices/products';
import { IState } from '../../redux/store';

const Popover = () => {
    const [isVisible, setIsVisible] = useState(false);
    const products = useSelector((state: IState) => selectProducts(state));
    const rowProducts = products.map((product) => {
        return (
            <div key={product.title}>
                <div className={styles.component}>
                    <label className={styles.button} htmlFor="button">
                        <img src="./logos/ChangeButton.jpg" alt="" />
                    </label>
                    <img className={styles.image} src={product.image} alt="" />
                    <h2 className={styles.title}>{product.title}</h2>
                </div>
            </div>
        );
    });

    return (
        <div className={styles.modalButton}>
            <label
                className={styles.modalLabel}
                onClick={() => setIsVisible(!isVisible)}
                htmlFor="button"
            >
                <img src="./logos/Vector50.jpg" alt="" />
            </label>
            <div
                className={`${styles.container}  ${
                    isVisible ? styles.open : ''
                }`}
            >
                <div className={styles.inputbox}>
                    <input className={styles.input} placeholder="Поиск"></input>
                </div>
                <div className={styles.componentscontainer}>{rowProducts}</div>
            </div>
        </div>
    );
};

export default Popover;

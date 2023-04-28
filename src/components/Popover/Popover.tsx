import { useSelector, useDispatch } from 'react-redux';
import styles from './Popover.module.css';
import { useState } from 'react';
import { selectOtherProducts } from '../../redux/slices/products';
import { IState } from '../../redux/store';
import { replaceProduct } from '../../redux/slices/products';

interface PopoverProps {
    productId: number;
}

const Popover = (props: PopoverProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();

    function replace(replaceId: number, targetId: number) {
        dispatch(replaceProduct({ replaceId, targetId }));
    }

    const [search, setSearch] = useState('');
    const products = useSelector((state: IState) => selectOtherProducts(state));
    const filtredProducts = products.filter((el) => {
        return el.title.toLowerCase().includes(search.toLowerCase());
    });
    function inputChange(event: any) {
        setSearch(event.target.value);
    }

    const rowProducts = filtredProducts.map((product, index) => {
        return (
            <div key={product.title}>
                <div className={styles.component}>
                    <label
                        onClick={() => replace(props.productId, product.id)}
                        className={styles.button}
                        htmlFor="button"
                    >
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
                className={
                    rowProducts.length === 0 && !isVisible
                        ? styles.modalLabelHidden
                        : styles.modalLabel
                }
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
                    <input
                        onChange={inputChange}
                        value={search}
                        className={styles.input}
                        placeholder="Поиск"
                    ></input>
                </div>
                <div className={styles.componentscontainer}>{rowProducts}</div>
            </div>
        </div>
    );
};

export default Popover;

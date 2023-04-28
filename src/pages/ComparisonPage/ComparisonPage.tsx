import styles from './ComparisonPage.module.css';
import { Table } from '../../components/Table/Table';
import { DisplayButtons } from '../../components/DisplayButtons/DisplayButtons';
import { ProductCards } from '../../components/ProductCards/ProductCards';
import { useState } from 'react';

export const ComparisonPage = () => {
    const [isDifferenceShown, setisDifferenceShown] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>Смартфоны</div>
                <DisplayButtons />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.checkbox}>
                    <input
                        onClick={() => setisDifferenceShown(!isDifferenceShown)}
                        className={styles.checkboxIcon}
                        type="checkbox"
                    ></input>
                    <div className={styles.checkboxText}>Показать различия</div>
                </div>
                <ProductCards />
            </div>
            <Table isDifferenceShown={isDifferenceShown} />
        </div>
    );
};

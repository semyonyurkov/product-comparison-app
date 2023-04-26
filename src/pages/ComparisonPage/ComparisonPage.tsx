import styles from './ComparisonPage.module.css';
import { Table } from '../../components/Table/Table';
import { DisplayButtons } from '../../components/DisplayButtons/DisplayButtons';
import { ProductCards } from '../../components/ProductCards/ProductCards';

export const ComparisonPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>Смартфоны</div>
                <DisplayButtons />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.checkbox}>
                    <input type="checkbox"></input>
                    <div className={styles.checkboxText}>Показать различия</div>
                </div>
                <ProductCards />
            </div>
            <Table />
        </div>
    );
};

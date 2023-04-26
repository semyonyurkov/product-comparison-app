import styles from './ComparisonPage.module.css';
import { Table } from '../../components/Table/Table';

export const ComparisonPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>Смартфоны</div>
                <div className={styles.buttons}>
                    <div className={styles.buttonsText}>Отобразить товары:</div>
                    <button className={styles.button}>2</button>
                    <button className={styles.button}>3</button>
                    <button className={styles.button}>4</button>
                    <button className={styles.button}>5</button>
                    <button className={styles.button}>6</button>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.checkbox}>
                    <input type="checkbox"></input>
                    <div className={styles.checkboxText}>Показать различия</div>
                </div>
                <div className={styles.phoneContainer}>
                    <div className={styles.phoneContent}>
                        <div className={styles.phoneBox}>
                            <div className={styles.image}>
                                <img src="./images/iPhone12.jpg" alt="" />
                            </div>
                            <div className={styles.modalButton}>
                                <button hidden id="button"></button>
                                <label htmlFor="button">
                                    <img src="./logos/Vector50.jpg" alt="" />
                                </label>
                            </div>
                        </div>
                        <div className={styles.phoneTitle}>Apple iPhone 12</div>
                    </div>
                    <div className={styles.phoneContent}>
                        <div className={styles.phoneBox}>
                            <div className={styles.image}>
                                <img src="./images/iPhone12.jpg" alt="" />
                            </div>
                            <div className={styles.modalButton}>
                                <button hidden id="button"></button>
                                <label htmlFor="button">
                                    <img src="./logos/Vector50.jpg" alt="" />
                                </label>
                            </div>
                        </div>
                        <div className={styles.phoneTitle}>Apple iPhone 12</div>
                    </div>
                    <div className={styles.phoneContent}>
                        <div className={styles.phoneBox}>
                            <div className={styles.image}>
                                <img src="./images/iPhone12.jpg" alt="" />
                            </div>
                            <div className={styles.modalButton}>
                                <button hidden id="button"></button>
                                <label htmlFor="button">
                                    <img src="./logos/Vector50.jpg" alt="" />
                                </label>
                            </div>
                        </div>
                        <div className={styles.phoneTitle}>Apple iPhone 12</div>
                    </div>
                </div>
            </div>
            <Table />
        </div>
    );
};

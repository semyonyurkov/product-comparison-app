import styles from './DisplayButtons.module.css';

export const DisplayButtons = () => {
    return (
        <div className={styles.buttons}>
            <div className={styles.buttonsText}>Отобразить товары:</div>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button>
            <button className={styles.button}>4</button>
            <button className={styles.button}>5</button>
            <button className={styles.button}>6</button>
        </div>
    );
};

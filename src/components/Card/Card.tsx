import styles from './Card.module.css';

export const Card = () => {
    return (
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
    );
};

import styles from './Popover.module.css';
import { useState } from 'react';

const Popover = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                <div className={styles.componentscontainer}>
                    <div>
                        <div className={styles.component}>
                            <label className={styles.button} htmlFor="button">
                                <img src="./logos/ChangeButton.jpg" alt="" />
                            </label>
                            <img
                                className={styles.image}
                                src="./images/iPhone12.jpg"
                                alt=""
                            />
                            <h2 className={styles.title}>Apple Iphone 12</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.component}>
                            <label className={styles.button} htmlFor="button">
                                <img src="./logos/ChangeButton.jpg" alt="" />
                            </label>
                            <img
                                className={styles.image}
                                src="./images/iPhone12.jpg"
                                alt=""
                            />
                            <h2 className={styles.title}>Apple Iphone 12</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.component}>
                            <label className={styles.button} htmlFor="button">
                                <img src="./logos/ChangeButton.jpg" alt="" />
                            </label>
                            <img
                                className={styles.image}
                                src="./images/iPhone12.jpg"
                                alt=""
                            />
                            <h2 className={styles.title}>Apple Iphone 12</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.component}>
                            <label className={styles.button} htmlFor="button">
                                <img src="./logos/ChangeButton.jpg" alt="" />
                            </label>
                            <img
                                className={styles.image}
                                src="./images/iPhone12.jpg"
                                alt=""
                            />
                            <h2 className={styles.title}>Apple Iphone 12</h2>
                        </div>
                    </div>
                    <div>
                        <div className={styles.component}>
                            <label className={styles.button} htmlFor="button">
                                <img src="./logos/ChangeButton.jpg" alt="" />
                            </label>
                            <img
                                className={styles.image}
                                src="./images/iPhone12.jpg"
                                alt=""
                            />
                            <h2 className={styles.title}>Apple Iphone 12</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popover;

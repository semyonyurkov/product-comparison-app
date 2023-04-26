import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.border}>
            <div className={styles.container}>
                <NavLink className={styles.catalogButton} to="/">
                    Каталог
                </NavLink>
                <div className={styles.containerRight}>
                    <div className={styles.comparison}>сравнение</div>
                    <NavLink className={styles.persAccButton} to="/">
                        Личный кабинет
                    </NavLink>
                    <img
                        className={styles.image}
                        alt=""
                        src="./logos/Vector.jpg"
                    ></img>
                </div>
            </div>
        </div>
    );
};

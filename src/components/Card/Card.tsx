import styles from './Card.module.css';
import Popover from '../Popover/Popover';

interface CardProps {
    title: string;
    image: string;
}

export const Card = (props: CardProps) => {
    return (
        <div className={styles.phoneContent}>
            <div className={styles.phoneBox}>
                <div className={styles.image}>
                    <img src={props.image} alt="" />
                </div>
                <Popover />
            </div>
            <div className={styles.phoneTitle}>{props.title}</div>
        </div>
    );
};

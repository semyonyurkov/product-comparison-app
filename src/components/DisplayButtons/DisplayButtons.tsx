import { useDispatch, useSelector } from 'react-redux';
import styles from './DisplayButtons.module.css';
import { setNumber } from '../../redux/slices/numDisplay';
import { IState } from '../../redux/store';

interface IArr {
    start: number;
    end: number;
}

export const DisplayButtons = () => {
    let nums: IArr = {
        start: 2,
        end: 6,
    };

    const dispatch = useDispatch();
    const setNumDipslay = (num: number) => {
        dispatch(setNumber(num));
    };

    const activeButton = useSelector((state: IState) => state.numDisplay);

    let arrOfButtons = [];
    for (let i = nums.start; i <= nums.end; i++) {
        arrOfButtons.push(
            <button
                key={i}
                onClick={() => setNumDipslay(i)}
                className={activeButton === i ? styles.active : styles.button}
            >
                {i}
            </button>
        );
    }
    let buttons = arrOfButtons.map((button) => {
        return button;
    });

    return (
        <div className={styles.buttons}>
            <div className={styles.buttonsText}>Отобразить товары:</div>
            {buttons}
        </div>
    );
};

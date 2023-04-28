import { useSelector } from 'react-redux';
import styles from './Table.module.css';
import { selectProperties } from '../../redux/slices/products';
import { IState } from '../../redux/store';
import { Row } from './Row';

interface TableProps {
    isDifferenceShown: boolean;
}

export const Table = (props: TableProps) => {
    const properties = useSelector((state: IState) => selectProperties(state));

    const tableProducts = Object.entries(properties).map((property) => {
        return (
            <Row
                key={property[0]}
                title={property[0]}
                values={property[1].values}
                type={property[1].type}
                isDifferenceShown={props.isDifferenceShown}
            />
        );
    });
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>{tableProducts}</tbody>
            </table>
        </div>
    );
};

import { CellType } from '../../const/mock';

interface IRowProps {
    title: string;
    values: (string | boolean)[];
    type?: CellType;
    isDifferenceShown: boolean;
}

function renderValue(value: string | boolean, type?: CellType) {
    switch (type) {
        case CellType.Text:
            return value;
        case CellType.Boolean:
            if (value) {
                return <img src="./logos/SubtractV.jpg" alt=""></img>;
            }
            return <img src="./logos/SubtractX.jpg" alt=""></img>;
        default:
            return value;
    }
}

export const Row = (props: IRowProps) => {
    if (props.isDifferenceShown && new Set(props.values).size === 1) {
        return null;
    }
    return (
        <tr>
            <th>{props.title}</th>
            {props.values.map((value, index) => {
                return <td key={index}>{renderValue(value, props.type)}</td>;
            })}
        </tr>
    );
};

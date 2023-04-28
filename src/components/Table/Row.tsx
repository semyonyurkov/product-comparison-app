import { CellType } from '../../const/mock';

interface IRowProps {
    title: string;
    values: string[];
    type?: CellType;
    isDifferenceShown: boolean;
}

function renderValue(value: string, type?: CellType) {
    switch (type) {
        case CellType.Text:
            return value;
        case CellType.Image:
            return <img src={value} alt=""></img>;
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
            <td>{props.title}</td>
            {props.values.map((value, index) => {
                return <td key={index}>{renderValue(value, props.type)}</td>;
            })}
        </tr>
    );
};

export enum CellType {
    Text,
    Boolean,
}

export interface Iproperty {
    value: string | boolean;
    title: string;
    type?: CellType;
}

export interface IProducts {
    id: number;
    title: string;
    image: string;
    properties: Iproperty[];
}

export const products: IProducts[] = [
    {
        id: 1,
        title: 'Apple iPhone 12',
        image: './images/iPhone12.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Apple',
            },
            {
                title: 'Год релиза',
                value: '2020',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '6,1',
            },
            {
                title: 'Страна-производитель',
                value: 'Китай',
            },
            {
                title: 'Объем памяти',
                value: '128 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '60 Гц',
            },
            {
                title: 'NFC',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '81 990 ₽',
            },
        ],
    },
    {
        id: 2,
        title: 'Xiaomi Mi 11 Lite',
        image: './images/XiaomiMi11Lite.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Xiaomi',
            },
            {
                title: 'Год релиза',
                value: '2021',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '6,55',
            },
            {
                title: 'Страна-производитель',
                value: 'Китай',
            },
            {
                title: 'Объем памяти',
                value: '128 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '90 Гц',
            },
            {
                title: 'NFC',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '27 490 ₽',
            },
        ],
    },
    {
        id: 3,
        title: 'Samsung Galaxy A72',
        image: './images/A72.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Samsung',
            },
            {
                title: 'Год релиза',
                value: '2021',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '6,7',
            },
            {
                title: 'Страна-производитель',
                value: 'Вьетнам',
            },
            {
                title: 'Объем памяти',
                value: '128 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '90 Гц',
            },
            {
                title: 'NFC',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '32 890 ₽',
            },
        ],
    },
    {
        id: 4,
        title: 'Apple iPhone Xr',
        image: './images/iPhoneXr.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Apple',
            },
            {
                title: 'Год релиза',
                value: '2018',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '5,9',
            },
            {
                title: 'Страна-производитель',
                value: 'Китай',
            },
            {
                title: 'Объем памяти',
                value: '64 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '60 Гц',
            },
            {
                title: 'NFC',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '41 990 ₽',
            },
        ],
    },
    {
        id: 5,
        title: 'Samsung Galaxy S21',
        image: './images/SamsungGalaxyS21.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Samsung',
            },
            {
                title: 'Год релиза',
                value: '2022',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '7,3',
            },
            {
                title: 'Страна-производитель',
                value: 'Вьетнам',
            },
            {
                title: 'Объем памяти',
                value: '512 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '120 Гц',
            },
            {
                title: 'NFC',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '87 990 ₽',
            },
        ],
    },
    {
        id: 6,
        title: 'Realme 8 Pro',
        image: './images/Realme8Pro.jpg',
        properties: [
            {
                title: 'Производитель',
                value: 'Realme',
            },
            {
                title: 'Год релиза',
                value: '2022',
            },
            {
                title: 'Диагональ экрана(дюйм)',
                value: '6,4',
            },
            {
                title: 'Страна-производитель',
                value: 'Китай',
            },
            {
                title: 'Объем памяти',
                value: '128 Гб',
            },
            {
                title: 'Частота обновления экрана',
                value: '90 Гц',
            },
            {
                title: 'NFC',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Подержка ESIM',
                value: true,
                type: CellType.Boolean,
            },
            {
                title: 'Поддержка беспроводной зарядки',
                value: false,
                type: CellType.Boolean,
            },
            {
                title: 'Стоимость',
                value: '33 490 ₽',
            },
        ],
    },
];

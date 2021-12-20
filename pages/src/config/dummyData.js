import {
    Alphabet,
    Stone,
    Symbols,
    Zodiac,
    RedDot,
    YellowDot,
    SilverDot
} from '../assets'

const categories = [
    {
        name: 'Symbols',
        img: Symbols,
        state: 'symbols',
        key: '1'
    },
    {
        name: 'Letters',
        img: Alphabet,
        state: 'letters',
        key: '2'
    },
    {
        name: 'Stones',
        img: Stone,
        state: 'stones',
        key: '3'
    },
    {
        name: 'Zodiac',
        img: Zodiac,
        state: 'zodiac',
        key: '4'
    },
]

// const dummyNugs = [
//     {
//         name: 'Beat 1',
//         price: 100,
//         code: '101010',
//         img: Nug1
//     },
//     {
//         name: 'Beat 2',
//         price: 100,
//         code: '101010',
//         img: Nug2
//     },
//     {
//         name: 'Beat 3',
//         price: 100,
//         code: '101010',
//         img: Nug3
//     },
//     {
//         name: 'Beat 4',
//         price: 100,
//         code: '101010',
//         img: Nug4
//     },
//     {
//         name: 'Beat 5',
//         price: 100,
//         code: '101010',
//         img: Nug5
//     },
//     {
//         name: 'Beat 6',
//         price: 100,
//         code: '101010',
//         img: Nug6
//     },
//     {
//         name: 'Beat 7',
//         price: 100,
//         code: '101010',
//         img: Nug7
//     },
//     {
//         name: 'Beat 8',
//         price: 100,
//         code: '101010',
//         img: Nug8
//     },
//     {
//         name: 'Beat 9',
//         price: 100,
//         code: '101010',
//         img: Nug9
//     },
//     {
//         name: 'Beat 10',
//         price: 100,
//         code: '101010',
//         img: Nug10
//     },
//     {
//         name: 'Beat 11',
//         price: 100,
//         code: '101010',
//         img: Nug11
//     },
//     {
//         name: 'Beat 12',
//         price: 100,
//         code: '101010',
//         img: Nug12
//     },
//     {
//         name: 'Beat 13',
//         price: 100,
//         code: '101010',
//         img: Nug13
//     },
//     {
//         name: 'Beat 14',
//         price: 100,
//         code: '101010',
//         img: Nug14
//     },
//     {
//         name: 'Beat 15',
//         price: 100,
//         code: '101010',
//         img: Nug15
//     },
//     {
//         name: 'Beat 16',
//         price: 100,
//         code: '101010',
//         img: Nug16
//     },
//     {
//         name: 'Beat 17',
//         price: 100,
//         code: '101010',
//         img: Nug17
//     },
//     {
//         name: 'Beat 18',
//         price: 100,
//         code: '101010',
//         img: Nug18
//     },
//     {
//         name: 'Beat 19',
//         price: 100,
//         code: '101010',
//         img: Nug19
//     },
//     {
//         name: 'Beat 20',
//         price: 100,
//         code: '101010',
//         img: Nug20
//     },
//     {
//         name: 'Beat 21',
//         price: 100,
//         code: '101010',
//         img: Nug21
//     },
//     {
//         name: 'Beat 22',
//         price: 100,
//         code: '101010',
//         img: Nug22
//     },
//     {
//         name: 'Beat 23',
//         price: 100,
//         code: '101010',
//         img: Nug23
//     },
// ]

const sizes = [
    {
        name: 'Junior',
        length: 13,
        links: 15,
        price: 0,
    },
    {
        name: 'Small',
        length: 15,
        links: 17,
        price: 4,
    },
    {
        name: 'Medium',
        length: 17,
        links: 19,
        price: 8,
    },
    {
        name: 'Large',
        length: 19,
        links: 21,
        price: 12,
    },
    {
        name: 'Max',
        length: 21,
        links: 23,
        price: 16,
    },
] 

const color = [
    {
        name: 'Red',
        img: RedDot
    },
    {
        name: 'Yellow',
        img: YellowDot
    },
    {
        name: 'Silver',
        img: SilverDot
    },
]

export {
    categories,
    sizes,
    color
}
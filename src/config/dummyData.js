import {
    Alphabet,
    Stone,
    Symbols,
    Zodiac,
    RedDot,
    YellowDot,
    SilverDot,
  } from "../assets";
  
  const categories = [
    {
      name: "Letters",
      img: Alphabet,
      state: "buchstabe",
      key: "2",
    },
    {
      name: "Symbols",
      img: Symbols,
      state: "symbol",
      key: "1",
    },
    {
      name: "Zodiac",
      img: Zodiac,
      state: "sternzeichen",
      key: "4",
    },
    {
      name: "Stones",
      img: Stone,
      state: "stein",
      key: "3",
    },
  ];
  
  const sizes = [
    {
      name: "Junior",
      length: 13,
      links: 15,
      price: 0,
    },
    {
      name: "Small",
      length: 15,
      links: 17,
      price: 4,
    },
    {
      name: "Medium",
      length: 17,
      links: 19,
      price: 8,
    },
    {
      name: "Large",
      length: 19,
      links: 21,
      price: 12,
    },
    {
      name: "Max",
      length: 21,
      links: 23,
      price: 16,
    },
  ];
  
  const color = [
    {
      name: "Red",
      img: RedDot,
    },
    {
      name: "Yellow",
      img: YellowDot,
    },
    {
      name: "Silver",
      img: SilverDot,
    },
  ];
  
  export { categories, sizes, color };
  
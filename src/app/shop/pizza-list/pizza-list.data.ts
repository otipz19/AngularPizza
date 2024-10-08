import { Pizza } from './pizza-card/pizza.model';

export const PIZZA_LIST: Pizza[] = [
  {
    id: 1,
    tag: 'Нова',
    img: 'assets\\pizza_7.jpg',
    title: 'Імпреза',
    subtitle: "М'ясна піца",
    categories: ['meat', 'pineapple'],
    description:
      'Балик, салямі, куриця, сир моцарелла, сир рокфорд, ананаси, томатна паста, петрушка',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 370,
        price: 99,
      },
      {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 660,
        price: 169,
      },
    ],
  },
  {
    id: 2,
    tag: 'Популярна',
    img: 'assets\\\pizza_2.jpg',
    title: 'BBQ',
    subtitle: "М'ясна піца",
    categories: ['meat', 'mushrooms'],
    description:
      'Мисливські ковбаски, ковбаски папероні, шинка, сир домашній, шампінйони, петрушка, оливки',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 460,
        price: 139,
      },
      {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 840,
        price: 199,
      },
    ],
  },
  {
    id: 3,
    img: 'assets\\pizza_1.jpg',
    title: 'Міксовий поло',
    subtitle: "М'ясна піца",
    categories: ['meat', 'pineapple'],
      description:
        'Вітчина, куриця копчена, сир моцарелла, ананаси, кукурудза, петрушка, соус томатний',
      options: [
        {
          id: 1,
          title: 'Мала',
          size: 30,
          weight: 430,
          price: 115,
        },
        {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 780,
        price: 179,
      },
    ],
  },
  {
    id: 4,
    tag: 'Нова',
    img: 'assets\\pizza_5.jpg',
    title: 'Сициліано',
    subtitle: "М'ясна піца",
    categories: ['meat', 'mushrooms'],
    description:
      'Вітчина, салямі, сир моцарелла, шампінйони, перець болгарський, соус томатний',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 450,
        price: 111,
      },
      {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 790,
        price: 169,
      },
    ],
  },
  {
    id: 5,
    tag: 'Популярна',
    img: 'assets\\pizza_3.jpg',
    title: 'Маргарита',
    subtitle: 'Вега піца',
    categories: ['vegan'],
    description:
      'Сир моцарелла, сир домашній, помідори, базилік, оливкова олія, соус томатний',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 370,
        price: 89,
      },
    ],
  },
  {
    id: 6,
    img: 'assets\\pizza_6.jpg',
    title: 'Мікс смаків',
    subtitle: "М'ясна піца",
    categories: ['meat', 'mushrooms', 'pineapple'],
    description:
      'Ковбаски, сир моцарелла, шампінйони, ананаси, цибуля кримська, огірки квашені, соус гірчичний',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 470,
        price: 115,
      },
      {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 780,
        price: 180,
      },
    ],
  },
  {
    id: 7,
    tag: 'Популярна',
    img: 'assets\\pizza_8.jpg',
    title: 'Дольче маре',
    subtitle: 'Морська піца',
    categories: ['seafood'],
    description:
      'Криветки тигрові, мідії, ікра червона, філе червоної риби, сир моцарелла, оливкова олія, вершки',
    options: [
      {
        id: 1,
        title: 'Велика',
        size: 40,
        weight: 845,
        price: 399,
      },
    ],
  },
  {
    id: 8,
    tag: 'Нова',
    img: 'assets\\pizza_4.jpg',
    title: 'Россо Густо',
    subtitle: 'Морська піца',
    categories: ['seafood'],
    description:
      'Ікра червона, лосось копчений, сир моцарелла, оливкова олія, вершки',
    options: [
      {
        id: 1,
        title: 'Мала',
        size: 30,
        weight: 400,
        price: 189,
      },
      {
        id: 2,
        title: 'Велика',
        size: 40,
        weight: 700,
        price: 299,
      },
    ],
  },
];

// let initialState = {
//     productsList: [
//       {_id: '5f1a51f01910080017657ed2', name: '1TB USB', 'category': 'Electronics', 'inStock': 963, 'price': 100.99},
//       {_id: '5f1a51f71910080017657ed3', name: 'Monitor', 'category': 'Electronics', 'inStock': 960, 'price': 100.99},
//       {_id: '5f1a51ff1910080017657ed4', name: 'Mouse', 'category': 'Electronics', 'inStock': 976, 'price': 100.99},
//       {_id: '5f1a52031910080017657ed5', name: 'Keyboard', 'category': 'Electronics', 'inStock': 982, 'price': 100.99},
//       {_id: '5f1a5f861910080017657ed7', name: 'TV', 'category': 'Electronics', 'inStock': 1973, 'price': 699},
//       {_id: '5f1a5f761910080017657ed6', name: 'Apples', 'category': 'Food', 'inStock': 979, 'price': 100.1},
//       {_id: '5f1a5faf1910080017657ed8', name: 'Calzones', 'category': 'Food', 'inStock': 929, 'price': 100.1},
//     ],
//     activeProduct: '',
//   }

//   export default function productsReducer(state = initialState, action) {
//     const {type, payload} = action;

//     switch(type) {
//       case "ACTIVATED":
//         const products = getProducts(payload.category);
//         return {...state, products: products}
//       default:
//       return state;
//     }
//   }

//   export function getProducts(category){
//     const products = initialState.productsList;
//     const response = products.filter(product => product.category === category);
//     return response;
//   }

let initalState = {
  products: [
    {
      _id: '5f1a51f01910080017657ed2',
      name: 'TV',
      category: 'electronics',
      price: 699.0,
      inStock: 5,
    },
    {
      _id: '5f1a51f71910080017657ed3',
      name: 'Mobile',
      category: 'electronics',
      price: 400.0,
      inStock: 3,
    },
    {
      _id: '5f1a51ff1910080017657ed4',
      name: 'Radio',
      category: 'electronics',
      price: 99.0,
      inStock: 15,
    },
    {
      _id: '5f1a52031910080017657ed5',
      name: 'Glasses',
      category: 'clothing',
      price: 9.0,
      inStock: 25,
    },
    {
      _id: '5f1a5f861910080017657ed7',
      name: 'Socks',
      category: 'clothing',
      price: 12.0,
      inStock: 10,
    },
    {
      _id: '5f1a5f761910080017657ed6',
      name: 'Strawberries',
      category: 'food',
      price: 0.99,
      inStock: 500,
    },
    {
      _id: '5f1a5faf1910080017657ed8',
      name: 'Eggs',
      category: 'food',
      price: 1.99,
      inStock: 12,
    },
    {
      _id: '5f1a5faf1910080017657ed9',
      name: 'Bread',
      category: 'food',
      price: 2.39,
      inStock: 90,
    },
  ],
  filetredProduct: [],
};

const products = (state = initalState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let filetredProduct = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, filetredProduct };
    default:
      return state;
  }
};

export default products;

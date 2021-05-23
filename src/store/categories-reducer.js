// const initialState = {
//   categoryList: [
//     {
//       _id: '5f0cdc15acac790017fc26ce',
//       name: 'Food',
//       displayName: 'FOOD',
//       description: 'Stuff for you to eat',
//     },
//     {
//       _id: '5f0cdc25acac790017fc26cf',
//       name: 'Electronics',
//       displayName: 'ELECTRONICS',
//       description: 'Making your life easier, one volt at a time',
//     },
//   ],
//   activeCategory: '',
//   activeDescription: '',
// };

// export default function categoriesReducer(state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case 'INACTIVE':
//       return initialState;
//     case 'ACTIVATE':
//       return {
//         ...state,
//         activateCategory: payload.category,
//         activateDescription: payload.description,
//       };
//     default:
//       return state;
//   }
// }

// export function inactive() {
//   return {
//     type: 'INACTIVE',
//   };
// }

// export function activate(category, description) {
//   return {
//     type: 'ACTIVATE',
//     payload: {
//       category,
//       description,
//     },
//   };
// }

let initalState = {
  categories: [
    {
      name: 'food',
      display_name: 'Food',
      description: 'delicious food',
    },
    {
      name: 'electronics',
      display_name: 'Electronics',
      description: 'original electronics from Japan',
    },
    {
      name: 'clothing',
      display_name: 'Clothing',
      description: 'turkish clothes',
    },
  ],
  activeCategories: '',
};

const categories = (state = initalState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      return { ...state, payload };
    default:
      return state;
  }
};

export default categories;

// actions:
export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

import superagent from 'superagent';
// const api = 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

export const getRemoteData = function (api) {
  console.log('step 2: actions first', api);
  return (dispatch) => {
    console.log('step 3: actions second', dispatch);
    return superagent
      .get(api)
      .then((res) => {
        console.log('step 4: actions third', res.body.products);
        dispatch(getProducts({ results: res.body.products }));
      })
      .catch((e) => {
        console.log('error', e.message);
      });
  };
};

// export const incUpdate = function (id, stock) {
//   return (dispatch) => {
//     return superagent
//       .put(`${api}/${id}`)
//       .send({ inStock: stock })
//       .then((response) => {
//         dispatch(increment({ results: response.body.products[0] }));
//       });
//   };
// };

// export const decUpdate = function (id, stock) {
//   return (dispatch) => {
//     return superagent
//       .put(`${api}/${id}`)
//       .send({ inStock: stock - 1 })
//       .then((response) => {
//         dispatch(decrement({ results: response.body.products[0] }));
//       });
//   };
// };

// actions:
export const getProducts = (products) => {
  console.log('step 5: products action', products);
  return {
    type: 'GET',
    payload: products,
  };
};

export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const show = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool,
  };
};

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};

// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

// import { connect } from 'react-redux';
// import { categoriesReducer } from '../store/categories-reducer';

// const mapDispatchToProps = { categoriesReducer };

// function SelectCategory(props) {
//   console.log('Props on Categories:', props);

//   const selectedCategory = (name) => {
//     props.categoriesReducer(name);
//   };

//   return (
//     <Container maxWidth='md'>
//         <Typography variant="h5">
//           Browse Our Categories
//         </Typography>
//         <Typography variant="h5">
//             {props.category.categories.map((
//               selection, idx) => (
//                 <div key={idx}>
//                   <Link component="button" variant="body2" color="inherit" onClick={() => selectedCategory(selection.name)}>
//                     {selection.description}
//                   </Link>
//                 </div>
//               )
//             )}
//         </Typography>

//         {/* <section id="category-selection">
//           {props.category.categories.map((selection, idx) => (
//             <ul key={idx}>
//               <li>{selection.display}</li>
//               <li>{selection.description}</li>
//             <button onClick={() => selectedCategory(selection.name)}>Select this Category</button>
//             </ul>
//           ))}
//         </section> */}
//     </Container>
//   )
// }

// const mapStateToProps = state => ({
//   category: state.categories
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);

import { connect } from 'react-redux';
import { active } from '../store/categories-reducer';
import { Typography } from '@material-ui/core';

const activeCategories = (props) => {
  return (
    <section>
      {props.activeList.categories.map((category) => {
        return (
          <Typography
            variant="h6"
            key={category.name}
            onClick={() => props.active(category.name)}
          >
            {category.display_name}
          </Typography>
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  activeList: state.categories,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(activeCategories);

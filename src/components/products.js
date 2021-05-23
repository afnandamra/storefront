import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const Status = (props) => {
  return (
    <section>
      {props.filetredProduct.map((product) => {
        return (
          <CardContent key={product._id}>
            <Typography variant="subtitle1" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body1" component="p">
              {product.price}
            </Typography>
          </CardContent>
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  myProducts: state.products.products,
  filetredProduct: state.products.filetredProduct,
});

export default connect(mapStateToProps)(Status);

import { AppBar, Typography, Toolbar } from '@material-ui/core/';

function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          OUR STORE
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

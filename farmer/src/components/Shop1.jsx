import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, Paper, Grid, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { CartContext } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';

// Styled Card component with hover effect
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const BriefContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const FullContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  padding: theme.spacing(2),
  overflowY: 'auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    opacity: 1,
  },
}));

const CartIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const HomeButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  width: 50,
  height: 50,
  borderRadius: '50%',
  background: `url('https://static.vecteezy.com/system/resources/previews/004/220/756/non_2x/home-silhouette-button-free-vector.jpg') no-repeat center center`,
  backgroundSize: 'cover',
  boxShadow: theme.shadows[3],
}));

const CartButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  width: 50,
  height: 50,
  borderRadius: '50%',
  background: `url('https://e7.pngegg.com/pngimages/387/168/png-clipart-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle.png') no-repeat center center`,
  backgroundSize: 'cover',
  boxShadow: theme.shadows[3],
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={props.ref} variant="filled" {...props} />;
});

export default function Shop1() {
  const { cartItems, addToCart } = useContext(CartContext);
  const [likedItems, setLikedItems] = useState(new Set());
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (isAlreadyInCart) {
      setSnackbarMessage("Already Added, Kindly view Cart page for selecting Quantities");
      setOpenSnackbar(true);
      return;
    }
    addToCart(item);
    // navigate('/cart');
  };

  const handleToggleFavorite = (item) => {
    setLikedItems((prevLikedItems) => {
      const newLikedItems = new Set(prevLikedItems);
      if (newLikedItems.has(item.id)) {
        newLikedItems.delete(item.id);
      } else {
        newLikedItems.add(item.id);
      }
      return newLikedItems;
    });
  };

  const items = [
    { id: 1, title: 'SNOW TURNIP', price: 250, originalPrice: 300, image: 'https://media.lehighvalleylive.com/food_impact/photo/baby-japenese-turnips-a2da5c867c6a7ec3.jpg', description: ' Fresh, farm-to-table turnips with a mild, sweet crunch! Packed with fiber and essential nutrients, perfect for soups, salads, and wholesome sides. Elevate your meals with the versatile turnip’s unique taste.' },
    { id: 2, title: 'PLUM TOMATO', price: 190, originalPrice: 235, image: 'https://www.uvm.edu/content/shared/files/styles/1200/public/uvm-extension-cultivating-healthy-communities/tomatoes2-e.jpg?t=rpri8o', description: 'Vine-ripened, juicy tomatoes bursting with natural sweetness and just the right touch of acidity! Hand-picked for peak flavor, these tomatoes are perfect for salads, sauces, and fresh dishes that bring farm freshness to your table.' },
    { id: 3, title: 'SWEET POTATO', price: 215, originalPrice: 220, image: 'https://nutritionfacts.org/app/uploads/2022/06/Is-It-Better-to-Bake-Boil-or-Steam-Sweet-Potatoes.jpg', description: ' Sweet, creamy, and loaded with vitamins, our fresh sweet potatoes add a delicious, natural sweetness to any meal. Roast, mash, or bake for a nutritious and satisfying treat the whole family will love!' },
    { id: 4, title: 'MEDIUM SIZED POTATOES', price: 250, originalPrice: 270, image: 'https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2FRKiZ605RAV8kjDQnxFCWP%2Fb03b8729817c90b29b88d536bfd37ac5%2F9-Unusual-Uses-For-Potatoes.jpg%3Ffm%3Dwebp&w=1920&q=75', description: ' A kitchen essential! Our premium potatoes are perfect for all your cooking needs, whether mashed, baked, or fried. Naturally rich in fiber and potassium, they’re the hearty ingredient you can rely on.' },
    { id: 5, title: 'BEETROOT', price: 50, originalPrice: 55, image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/277432_2200-732x549.jpg', description: 'Vibrant, nutrient-rich beetroots straight from the farm! With their earthy-sweet flavor and stunning color, these beets are a powerhouse of vitamins and antioxidants. Perfect for salads, juices, and colorful dishes..' },
    { id: 6, title: 'GREEN ONION', price: 99, originalPrice: 112, image: 'https://cleangreensimple.com/wp-content/uploads/2020/11/green-onions-1-800x533.jpg', description: 'Vibrant, nutrient-rich beetroots straight from the farm! With their earthy-sweet flavor and stunning color, these beets are a powerhouse of vitamins and antioxidants. Perfect for salads, juices, and colorful dishes.' },
    { id: 7, title: 'OOTY GARLIC', price: 250, originalPrice: 270, image: 'https://images.ctfassets.net/j6utfne5ne6b/5VC9Qxq2LXYqg6DZmvSKCd/869e1a8c46239a83230b88e9d01825e3/garlic-for-dandruff.jpg?fm=webp&q=70', description: ' Crisp and flavorful green onions with a mild bite, perfect for adding freshness to any dish! Use them as a garnish, in salads, or to enhance the flavor of your favorite recipes. Straight from the farm to your kitchen.' },
    { id: 8, title: 'SMALL TOMATOES', price: 75, originalPrice: 80, image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg', description: ' Bold, aromatic garlic to elevate any recipe! Fresh and full of flavor, our garlic cloves are a must-have for any kitchen. Add depth to your dishes and enjoy its rich, savory taste that enhances every bite.' },
  ];

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <HomeButton component={Link} to="/" aria-label="home" />
      <CartButton component={Link} to="/cart" aria-label="cart" />

      <Paper elevation={12} style={{ margin: "50px", padding: "20px" }}>
        {/* <Typography variant="h4" component="h1" align="center" gutterBottom>
          Our Products
        </Typography> */}
        <Grid container spacing={4}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                  style={{ objectFit: 'cover' }}
                />
                <BriefContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PRICE: ₹{item.price} per kg
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strike>₹{item.originalPrice} per kg</strike>
                  </Typography>
                </BriefContent>
                <FullContent>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PRICE: ₹{item.price} per kg
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strike>₹{item.originalPrice} per kg</strike>
                  </Typography>
                  <Typography variant="body2" color="green">
                    You're Saving: ₹{item.originalPrice - item.price}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </FullContent>
                <CartIconWrapper>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => handleAddToCart(item)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </CartIconWrapper>
                <CardActions>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleToggleFavorite(item)}
                    style={{ color: likedItems.has(item.id) ? 'red' : 'inherit' }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
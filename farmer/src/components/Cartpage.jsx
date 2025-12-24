import React, { useContext, useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CartContext } from './Cartcontext';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';

// Custom styled buttons
const CheckoutButton = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
}));

const RemoveButton = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#d32f2f',
  color: 'white',
  border: 'none',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#c62828',
  },
}));

const CartSummaryPaper = styled(Paper)(({ theme }) => ({
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: '#f3f3f3',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  border: '2px solid #ddd',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  // Calculate total price for selected items
  const totalPrice = Array.from(selectedItems).reduce((acc, itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    return acc + (item ? item.price * (quantities[itemId] || 1) : 0);
  }, 0);

  // Calculate original price for selected items
  const totalOriginalPrice = Array.from(selectedItems).reduce((acc, itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    return acc + (item ? item.originalPrice * (quantities[itemId] || 1) : 0);
  }, 0);

  // Calculate total saved amount
  const totalSaved = totalOriginalPrice - totalPrice;

  // Calculate GST (12% of total price)
  const gstAmount = totalPrice * 0.12;

  const handleCheckboxChange = (event, itemId) => {
    const updatedSelectedItems = new Set(selectedItems);
    if (event.target.checked) {
      updatedSelectedItems.add(itemId);
    } else {
      updatedSelectedItems.delete(itemId);
    }
    setSelectedItems(updatedSelectedItems);
    // Ensure quantities are reset for newly selected items
    if (!updatedSelectedItems.has(itemId)) {
      const newQuantities = { ...quantities };
      delete newQuantities[itemId];
      setQuantities(newQuantities);
    }
  };

  const handleQuantityChange = (event, itemId) => {
    const value = event.target.value;
    const newQuantity = value === '' ? 1 : Math.max(1, parseInt(value, 10));
    setQuantities(prevQuantities => ({ ...prevQuantities, [itemId]: newQuantity }));
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach(itemId => {
      const item = cartItems.find(item => item.id === itemId);
      if (item) {
        removeFromCart(item);
      }
    });
    setSelectedItems(new Set());
    setQuantities({});
  };

  const handleCheckout = () => {
    // You may want to validate quantities here
    navigate('/color');
  };

  const areAllQuantitiesValid = Array.from(selectedItems).every(itemId => quantities[itemId] > 0);
  const isCheckoutEnabled = selectedItems.size > 0 && areAllQuantitiesValid;

  return (
    <Box style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        {/* <h1 style={{ color: '#B80000', fontSize: '71px', fontFamily: 'viner hand itc', margin: 0 }}>FarmLink &nbsp;</h1> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Paper elevation={12} style={{ margin: '50px', padding: '20px', backgroundColor: 'rgba(128, 128, 128, 0.8)' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Cart Items
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body2" color="textSecondary">No items in the cart.</Typography>
        ) : (
          <Grid container spacing={4}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedItems.has(item.id)}
                          onChange={(event) => handleCheckboxChange(event, item.id)}
                        />
                      }
                      label={<Typography variant="h6" component="div">{item.title}</Typography>}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price}
                    </Typography>
                    {selectedItems.has(item.id) && (
                      <TextField
                        type="number"
                        value={quantities[item.id] || ''}
                        onChange={(event) => handleQuantityChange(event, item.id)}
                        label="Quantity"
                        inputProps={{ min: 1 }}
                        style={{ marginTop: '10px' }}
                      />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>

      <Container style={{ marginTop: '20px' }}>
        <CartSummaryPaper elevation={3}>
          <Box textAlign="center" mb={2}>
            <ShoppingCartIcon style={{ fontSize: '40px', color: '#1976d2' }} />
            <Typography variant="h6" component="h2" gutterBottom>
              Order Summary
            </Typography>
          </Box>
          <Divider style={{ margin: '10px 0' }} />
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Total Price:
            </Typography>
            <Typography variant="body1" color="primary">
              ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <ReceiptIcon style={{ fontSize: '20px', color: '#ff9800' }} />
            <Typography variant="body1" fontWeight="bold">
              GST Invoice (12%):
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ${gstAmount.toFixed(2)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1" fontWeight="bold">
              Original Price:
            </Typography>
            <Typography variant="body1" color="textSecondary">
              ${totalOriginalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <SavingsIcon style={{ fontSize: '20px', color: '#4caf50' }} />
            <Typography variant="body1" fontWeight="bold">
              You Saved:
            </Typography>
            <Typography variant="body1" color="success.main">
              ${totalSaved.toFixed(2)}
            </Typography>
          </Box>
        </CartSummaryPaper>
        
        <Box textAlign="center" mt={2} display="flex" justifyContent="center" gap="10px">
          <RemoveButton
            onClick={handleRemoveSelected}
            disabled={selectedItems.size === 0}
          >
            CLEAR
          </RemoveButton>
          <CheckoutButton
            onClick={handleCheckout}
            disabled={!isCheckoutEnabled}
          >
            CHECKOUT
          </CheckoutButton>
        </Box>
      </Container>
    </Box>
  );
};

export default CartPage;
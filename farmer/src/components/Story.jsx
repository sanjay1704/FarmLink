import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Rice',
    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/382/296/41/nature-food-wallpaper-preview.jpg',
    path: '/rice'
  },
  {
    name: 'Sugarcane',
    imageUrl: 'https://t4.ftcdn.net/jpg/08/06/35/35/360_F_806353540_Vya51e63Corzk2dtCXXxdnQnaqkWNcoM.jpg',
    path:'/sugarcane'
  },
  {
    name: 'Groundnut',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-ZtVrTDlDV5Ookt10HHxZqqz972ByFKxvw&s',
    path:'/groundnut'
  },
  {
    name: 'Millets',
    imageUrl: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2021/03/outlook-poshan-700x394-1.jpg?fit=700%2C394&ssl=1',
    path:'/millets'
  },
  {
    name: 'Pulses',
    imageUrl: 'https://t4.ftcdn.net/jpg/03/20/86/93/360_F_320869374_kiH8I8kcpc6UbCbJ0JTnuioiBMeb17ic.jpg',
    path:'/pulses'
  },
  {
    name: 'Coconut',
    imageUrl: 'https://img.freepik.com/premium-photo/coconut-hd-images-wallpapers-free-download_88650-4921.jpg',
    path:'/coconut'
  },
  {
    name: 'Banana',
    imageUrl: 'https://img.freepik.com/premium-photo/creative-banana-leaf-background-banana-leaf-background-green-leaf-wallpaper-nature_1295756-19913.jpg',
    path:'/banana'
  },
  // {
  //   name: 'Vegetables',
  //   imageUrl: 'https://media.istockphoto.com/id/589415708/photo/fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=aBFGUU-98pnoht73co8r2TZIKF3MDtBBu9KSxtxK_C0=',
  // },
  // {
  //   name: 'Fruits',
  //   imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/024/174/781/small_2x/juicy-fruits-top-view-background-ai-generative-photo.jpg',
  // },
  {
    name: 'Spices',
    imageUrl: 'https://img.freepik.com/premium-photo/black-pepper-hd-8k-wallpaper-stock-photographic-image_915071-70764.jpg',
    path:'/spice'
  },
];

const Story = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Top Farming Products in Tamil Nadu</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: '1200px' }}>
        {products.map((product, index) => (
          <Link 
            to={product.path || "#"} // Use the path if provided; otherwise, link to "#"
            key={index} 
            style={{ textDecoration: 'none', color: 'inherit', width: '45%', margin: '10px' }}
          >
            <div style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              textAlign: 'center'
            }}>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                style={{ width: '100%', height: 'auto', maxHeight: '250px', objectFit: 'cover' }} 
              />
              <h2 style={{ fontSize: '20px', marginTop: '10px' }}>{product.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Story;

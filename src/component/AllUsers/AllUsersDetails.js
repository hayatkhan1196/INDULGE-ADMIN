import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Pizza from "../../assets/images/burger.jpg";
import Burger from "../../assets/images/pizza.jpg";
import Noodle from "../../assets/images/girl_user.jfif";
import '../../style/order.scss';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';

const images = [{ url: Pizza }, { url: Burger }, { url: Noodle }];

const AllUsersDeatail = () => {
  return (
    <div>
    <div className="slider_image">
      <SimpleImageSlider width={486} height={200} images={images} showNavs={true} slideDuration={0.5} />
    </div>
    <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
       <strong>ID:</strong> 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        <storng>10</storng>
      </Typography>
      </span>
      <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Name:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
      khan
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
       <strong>Full Name:</strong> 
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Jhon Leo
      </Typography>
      </span>
       <Divider />
       <span style={{display:'flex', justifyContent: 'space-between'}}>
    <Typography variant="body1" component="div" gutterBottom>
        <strong>Location:</strong>
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Islambad Pakistan
      </Typography>
      </span>
       <Divider />
      
    </div>
  );
};

export default AllUsersDeatail;

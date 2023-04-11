import  React , {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


// const ReadMore = ({ children }) => {
//     const text = children;
  
//     return (
//       <p className="text">
//         {isReadMore ? text.slice(0, 150) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? "...read more" : " show less"}
//         </span>
//       </p>
//     );
//   };
const BlogCard=(props)=> {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
     
          </Typography>
          <Typography  variant="body2" color="text.secondary">
      
            {isReadMore ? props.des.slice(0, 150) : props.des}
            
        
<Box mt={1}>
{
    isReadMore ? <Button onClick={toggleReadMore} variant='outlined'>read more</Button> :<Button onClick={toggleReadMore} variant='outlined'>show less</Button>
 }
</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogCard
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox ({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1561484930-974554019ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1561486576-189f808ca324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1673515243090-649c650982eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW4lMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";
    
     return (
        <div className="InfoBox">

<div className="cardContainer">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {info.humidity> 80 ? RAIN_URL: info.temp > 20 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       <p>Temperature = {info.temp}&deg;C</p>
       <p>Humidity = {info.humidity}</p>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p> The weather can be described as a <i> <b> {info.weather}</b> </i> feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
     );
}
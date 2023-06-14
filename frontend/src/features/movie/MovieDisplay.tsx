import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { Movie } from "../../app/models/movie";
import { Link } from "react-router-dom";

interface Props {
    movies : Movie;
}

export default function MovieDisplay({movies}: Props) {
    return (
        <>
        <Grid container spacing={1} mb={8}>
           <Grid item xs={12} md={8}>
                 
                <Card sx={{ maxWidth: 1500, height: 'auto' }}>
                    <CardHeader 
                    avatar={
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                            {movies.title.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                    title={movies.title}
                    titleTypographyProps ={{
                        sx: {fontWeight: 'bold', color: 'primary.main'}
                    }}
                    />
                    <CardMedia
                    
                        sx={{ height: 400, backgroundSize:'contain', bgcolor: 'primary.light'}}
                        component='img' 
                        image={movies.poster}
                        title={movies.title}
                    
                    />
                    <CardContent>
                        <Typography gutterBottom color='secondary' variant="h5" >
                        {(movies.year)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {movies.genre} / {movies.language}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/movie/${movies.imdbID}`} size="large" variant="contained">View Details</Button>
                        {/* <Button component={Link} to={`/${movies.imdbID}`}size="small">View</Button> */}
                    </CardActions>
                </Card>
           </Grid>
        </Grid>   
        </>
    )
      
}
import { Grid, Paper, TextField, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import TimestampToDate from "../../TimeStampToDate";
import MovieDisplay from "./MovieDisplay";
import { useEffect, useState } from "react";
import { Movie } from "../../app/models/movie";
import { QueryObj } from "../../app/models/QueryObj";

export default function MovieSearch(){
    const [movie, setMovie] = useState<Movie>({ title: 'Fast and Furious',year: '1939',rated: 'Passed',released: '06 Oct 1939',runtime: '73 min',genre: 'Comedy, Crime, Mystery',director: 'Busby Berkeley',writer: 'Harry Kurnitz',actors: 'Franchot Tone, Ann Sothern, Ruth Hussey',
  plot: 'Rare book dealers Joel and Garda take a summertime jaunt to the seashore where he becomes involved in a beauty pageant as investor and judge much to her chagrin.',
  language: 'English',country: 'United States',awards: 'N/A',poster: 'https://m.media-amazon.com/images/M/MV5BMjAyNTQ1NjA3Ml5BMl5BanBnXkFtZTgwOTIyNjIxMzE@._V1_SX300.jpg',
  ratings: [{
    source: 'Internet Movie Database',
    value: '6.1/10'
}],metascore: 'N/A',imdbRating: '6.1',imdbVotes: '853',imdbID: 'tt0031298',type: 'movie',dvd: '07 May 2013',boxOffice: 'N/A',production: 'N/A',
  website: 'N/A',
  response: 'True',});
  const [inputValue, setInputValue] = useState('');
  const [queryResponse, setQueryResponse] = useState<QueryObj[]>([]);
  const [data, setData] = useState('');
    const handleSubmit = async (event :  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if(data != ' '){
          try {
          
            const response = await fetch('https://localhost:7277/api/SearchMovies/'+ data , {
              method: 'GET',
             
            });
            if (response.ok) {
              const json = await response.json();   
              console.log(json);
              setMovie(json);
              setInputValue('');
              setData(' ')
              fetchQueries();
             
              
            } else {
              console.log('Error sending data');
            }
          } catch (error) {
            console.log(error);
          }
        }
      };
      useEffect(() => {
        fetchQueries();
      }, []);

      const handleInputChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputValue(e.target.value);
        setData(e.target.value)
      };
    
      const fetchQueries = async () => {
        try {
          const response = await fetch('https://localhost:7277/api/SearchMovies',{
            method: 'GET',
          });
          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setQueryResponse(json);
            
          } else {
            console.log('Error sending data');
          }
        } catch (error) {
          console.log('Network error');
        }
      };
     
      
    return(
        <Grid container spacing={4}>
          <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Paper sx={{mb: 2, mt: 4}}>
                    <TextField label='Search Movie by Title' variant = 'outlined' value={inputValue} onChange={handleInputChange} fullWidth  />
                </Paper>
                <Typography align='center'>
                    <Button  color='primary' size='large' type='submit' variant='contained'>
                    Search Movie
                    </Button>
                </Typography>
                </form>
            </Grid>
            <Grid item xs={12} md={3}>
                  <Paper sx={{mb: 2}}>
                  <Typography variant='h6' >
                      Recent Search Queries
                  </Typography>
                          <List>
                              {queryResponse.map((query: any) =>(
                                  <ListItem key={query.id}>
                                      <ListItemText>
                                          {query.query} - <TimestampToDate timestamp={query.createdAt} />{}
                                      </ListItemText>

                                  </ListItem>

                              ))}
                              
                          </List>
                </Paper>
                  
            </Grid>
              <Grid item xs = {12} md={9}>
               <MovieDisplay  movies={movie} />
              </Grid>
            
          </Grid> 
    )
}
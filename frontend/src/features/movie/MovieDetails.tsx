import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../app/models/movie";

export default function MovieDetails(){
    const {imdbID} = useParams<{imdbID: string}>();
    const [loading, setLoading] = useState(true);
    const [response_data, setResponseData] = useState<Movie>({ title: '',year: '',rated: '',released: '',runtime: '',genre: '',director: '',writer: '',actors: '',
        plot: '',language: '',country: '',awards: '',poster: '',ratings: [],metascore: '',imdbRating: '',imdbVotes: '',imdbID: '',type: '',dvd: '',boxOffice: '',production: '',
        website: '',
        response: '',});
    useEffect(() => {
        fetchMovie();
      }, []);

      const fetchMovie = async () => {
        try {
          const response = await fetch(`https://localhost:7277/api/SearchMovies/GetMovieById/?imdbID=${imdbID}`,{
            method: 'GET',
          });
          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setLoading(false);
            setResponseData(json);
            
            
          } else {
            console.log('Error sending data');
          }
        } catch (error) {
          console.log('Network error');
        }
      };
      if(loading) return <h3>Loading... </h3>
    return(
        <Grid container spacing={6} sx={{mt: 2}}>
            <Grid item xs={10} md={6}>
                <img src={response_data.poster} alt={response_data.title} style={{width: '100%'}} />
             </Grid>
             <Grid item xs = {10} md={6}>
                <Typography variant='h3'>
                    {response_data.title}
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Typography variant='h4' color='secondary'>
                    {response_data.year}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>{response_data.title}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Year</TableCell>
                                <TableCell>{response_data.year}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Rated</TableCell>
                                <TableCell>{response_data.rated}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Released</TableCell>
                                <TableCell>{response_data.released}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Runtime</TableCell>
                                <TableCell>{response_data.runtime}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Genre</TableCell>
                                <TableCell>{response_data.genre}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Director</TableCell>
                                <TableCell>{response_data.director}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Actors</TableCell>
                                <TableCell>{response_data.actors}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Writer</TableCell>
                                <TableCell>{response_data.writer}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Plot</TableCell>
                                <TableCell>{response_data.plot}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Language</TableCell>
                                <TableCell>{response_data.language}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell>{response_data.country}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Awards</TableCell>
                                <TableCell>{response_data.awards}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Metascore</TableCell>
                                <TableCell>
                                    {response_data.metascore}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>imdbRating</TableCell>
                                <TableCell>{response_data.imdbRating}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>imdbVotes</TableCell>
                                <TableCell>{response_data.imdbVotes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>imdbID</TableCell>
                                <TableCell>{response_data.imdbID}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{response_data.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>DVD</TableCell>
                                <TableCell>{response_data.dvd}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Box Office</TableCell>
                                <TableCell>{response_data.boxOffice}</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Production</TableCell>
                                <TableCell>{response_data.production}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Website</TableCell>
                                <TableCell>{response_data.website}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Response</TableCell>
                                <TableCell>{response_data.response}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
             </Grid>
        </Grid>
        
        
    )
}
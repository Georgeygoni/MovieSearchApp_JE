import { useState } from 'react';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MovieSearch from '../../features/movie/MovieSearch';
import MovieDetails from '../../features/movie/MovieDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme ({
     palette: {
      mode: paletteType,
      background: {
        default:paletteType == 'light'? '#eaeaea' : '#121212'
      }
     }
  })
function handleThemeChange(){
    setDarkMode(!darkMode);
  }


  

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     
     <Container>
     <Routes>
     <Route  path='/' Component={MovieSearch}/>
        <Route path='/movie' Component={MovieSearch}/>
        <Route path='/movie/:imdbID' Component={MovieDetails}/>
     </Routes>
        
    
        
      
     </Container>
     </ThemeProvider>
    
     
  );
}

export default App;

import { AppBar, Box, Switch, Toolbar, Typography } from "@mui/material";


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const navStyles = {
    color: 'inherit',                
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    },
    textDecoration: 'none'
}
export default function Header({darkMode, handleThemeChange}: Props){
    return (
        <AppBar position = 'static'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <Box display = 'flex' alignItems='center'>
                <Typography variant='h6'
                    sx={navStyles}>
                        Dark Mode
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Box>
            </Toolbar>
        </AppBar>
    )
}
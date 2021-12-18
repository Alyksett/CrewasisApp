import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from "../AuthContext"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const  Settings = () => {

  const { signout } = useAuth()
    const nav = useNavigate()

    function handleSignout() {
        signout()
        nav('/')
    }
  
  return (
    <Container component="main" maxWidth="xs">
        
        <Box
        sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            
            <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                <AccountCircleIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                User Settings
            </Typography>

                <Button
                onClick={handleSignout}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Signout
                </Button>
                

        </Box>
    </Container>
);

}

export default Settings;

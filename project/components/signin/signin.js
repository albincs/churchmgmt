import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material"

const Signin = () =>{
    return(
        <Box>

            <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:3}}>

                <Box>
                    <Typography variant="h4" fontWeight={'bold'}>Login</Typography>
                </Box>

                <Stack width={{xl:500, md:500, sm:400, Xs:200}}  display={'flex'} flexDirection={'column'} gap={2}>
                    <TextField label="UserName or Email" fullWidth />
                    <TextField label="Passwird" fullWidth/>                   
                
                </Stack>

                <Box>
                    <Button variant="contained">Signin</Button>
                </Box>

            </Grid>

        </Box>
    )
}
export default Signin;
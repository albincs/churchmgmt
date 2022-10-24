import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material"

const ContactForm = () =>{
    return(
        <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:3}}>

            <Box>
                <Typography variant="h4" fontWeight={'bold'}>Contact</Typography>
            </Box>

            <Stack width={{xl:500, md:500, sm:400, Xs:200}}  display={'flex'} flexDirection={'column'} gap={2}>
                <TextField label="UserName" fullWidth />
                <TextField label="Email" fullWidth/>
                <TextField label="Phone" fullWidth/>
                <TextField label="Message" fullWidth/>
                <TextField label="Send Message " multiline fullWidth maxRows={5}/>
               
            </Stack>

            <Box>
                <Button variant="contained">Submit</Button>
            </Box>

        </Grid>
    )
}
export default ContactForm;
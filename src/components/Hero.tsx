import { Box, Button, Grid, Typography } from '@mui/material';
import project from "../assets/images/project.png";
function Hero() {
  return (
    <Box sx={{minHeight:"80vh"}}>
        <Grid container sx={{paddingTop:"30px"}}> 
        <Grid item xs={12} md={6} sx={{paddingLeft:"40px", }}>
          <Typography variant='h1' sx={{fontSize:{md:"80px", xs:"60px"}, fontWeight:700, color:"#00008B", marginBottom:"10px"}}>
            Project Management
          </Typography>
          <Typography variant='h1' sx={{fontSize:{md:"40px", xs:"30px"}, color:"#00008B"}}>
            Time to get organised
          </Typography>
          <Box
      sx={{
        backgroundImage: 'linear-gradient(to right, #89CFF0, #0096FF, #0047AB)',
        width: '30%',
        height: '10px',
        borderRadius:"2px",
        marginY:"30px"
      }}
    >
    </Box>
    <Typography variant='h1' sx={{fontSize:{md:"20px", xs:"15px"},lineHeight:1.8, color:"#00008B", marginBottom:"10px"}}>
            You wouldn't fly without an altimeter,<br/>
            speedometer, radar, or aircraft controller. Why <br/>
            work without a competent project manager?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', marginBottom:"30px" }}>
      <Button variant="contained" sx={{textTransform:"none", background:'linear-gradient(to right, #89CFF0, #0096FF, #0047AB)', paddingY:{md:"15px"}, width:{md:"180px"}, borderRadius:"50px"}}>Get Started</Button>
      <Box sx={{ flex: 0.05 }} />
      <Button variant="outlined" sx={{color: "#0047AB", textTransform:"none", borderWidth:"3px",  borderColor:'linear-gradient(to right, #89CFF0, #0096FF, #0047AB)', paddingY:{md:"15px"}, width:{md:"180px"}, borderRadius:"50px"}}>Read Our Stories</Button>
    </Box>
        </Grid>
        <Grid item xs={12} md={6}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <img src={project} alt="hero" style={{padding:"30px"}} />
      </Box>
    </Grid>
        </Grid>
    </Box>
  )
}

export default Hero
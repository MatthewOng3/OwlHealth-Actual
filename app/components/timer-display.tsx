import { Box, Typography } from "@mui/material";

/**
 * @description Takes in seconds argument to display the timer in MM:SS
 * @param seconds Time in seconds format
 * @returns Timer component 
 */
export default function Timer({ seconds }) {
	
	//
    const formatTime = (time) => {
      const mins = Math.floor(time / 60);
      const secs = time % 60;
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };
	
    return (
      <Box sx={{justifyContent: 'center', alignItems: 'center' }}>
        <Typography textAlign={'center'} color="black" fontSize={24}>
          {formatTime(seconds)} 
        </Typography>
      </Box>
    );
  }
  
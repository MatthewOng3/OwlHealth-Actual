import { Box, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type TimeProps = {
  seconds: number;
}

/**
 * @description Takes in seconds argument to display the timer in MM:SS
 * @param seconds Time in seconds format
 * @returns Timer component 
 */
export default function Timer({ seconds }: TimeProps) {
	
	//
    const formatTime = (time: number) => {
      const mins = Math.floor(time / 60);
      const secs = time % 60;
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };
    
    return (
      <Box sx={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'black', paddingX: 1, paddingY: 0.2, borderRadius: 2, flexDirection: 'row', display:'flex', gap: 2}}>
        <AccessTimeIcon/>
        <Typography textAlign={'center'} color="black" fontSize={24}>
          {formatTime(seconds)} 
        </Typography>
      </Box>
    );
  }
  
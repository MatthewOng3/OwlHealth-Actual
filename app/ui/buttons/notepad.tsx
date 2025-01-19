'use client'
import { Box, Button, Card, CardContent, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { COLORS } from "@/app/util/constants/app-dimensions";

type Props = {
    setState: (input: string[]) => void;
}
function NotePad({setState}: Props){
    // State for notes and input text
    const [notes, setNotes] = useState<string[]>([]);
    const [inputText, setInputText] = useState("");

    // Handle adding a new note when Enter is pressed
    const handleAddNote = (event) => {
        if (event.key === "Enter" && inputText.trim()) {
           addNote();
        }
    };

    //Add notes to an array
    function addNote(){
        setNotes([...notes, inputText]); // Add new note to the list
        setState([...notes, inputText])
        setInputText("");  
    }
    

  return (
    <Box
      sx={{
        display: "flex",
        height: 600,  
        borderWidth: 1,
        borderRadius: 3,
        borderColor: COLORS.green100,
        width: "100%", 
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",  
          display: "flex",
          flexDirection: "column",
          padding: 2,
        }}
      >
        {/* Header Section */}
        <Typography variant="h5" gutterBottom>
          Notes
        </Typography>

        {/* Notes List */}
        <CardContent
          sx={{
            flexGrow: 1,  
            overflowY: "auto",  
          }}
        >
          <List>
            {notes.map((note, index) => (
              <ListItem key={index}>
                <Typography sx={{ marginRight: 1 }}>•</Typography>
                <ListItemText primary={note} />
              </ListItem>
            ))}
          </List>
        </CardContent>

        {/* Input Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* TextField for entering notes */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your notes"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleAddNote}
          />
          {/* Send Button */}
          <IconButton
            
            onClick={addNote}  
          >
             <SendIcon/>
          </IconButton>
        </Box>
      </Card>
    </Box>
  )
}

export default NotePad;
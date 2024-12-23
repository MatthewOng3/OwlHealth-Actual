'use client'
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import ButtonStates from "./ui/buttons/button-states";
import { useEffect, useRef, useState } from "react";

import { Grid2 } from '@mui/material';
//Icons
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from "react";
import NotePad from "./ui/buttons/notepad";
import Timer from "./components/timer-display";
import { useTimer } from "./util/timer";
import { summariseConsultation } from "./util/apis/openai";

export default function Page() {
	const [loading, setLoading] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [error, setError] = useState('');
	const [transcription, setTranscription] = useState('');
	const [notes,setNotes] = useState<string[]>([]);
	const recognitionRef = useRef(null);
	const { seconds, startTimer, stopTimer, pauseTimer, resumeTimer } = useTimer();

	console.log(transcription, "TRANSCRIPTION")

	async function stopRecording(){
		recognitionRef.current.stop();
		setIsRecording(false)
		setIsPaused(false)
		stopTimer();


		const res = await summariseConsultation(notes.concat(transcription).join(' '));
		console.log(res)
	}

	function startRecording(){
		setTranscription("");
		setIsRecording(true);
		startTimer();
		recognitionRef.current.start();
	}

	function pauseRecording(){
		setIsPaused(true)
		pauseTimer();
		recognitionRef.current.stop();
		
	}

	function resumeRecording(){
		setIsPaused(false)
		resumeTimer();
		recognitionRef.current.start();
		
	}

	
	useEffect(() => {
	  // Initialize Speech Recognition
	  const SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;
		
	  if (!SpeechRecognition) {
		alert("Speech Recognition is not supported in your browser.");
		return;
	  }
  
	  const recognition = new SpeechRecognition();
	  recognition.continuous = true; // Keep listening until stopped
	  recognition.interimResults = true; // Show partial results
	  recognition.lang = "en-US"; // Language setting
  
	  // Capture Speech Results
	  recognition.onresult = (event) => {
		let interimTranscript = "";
		for (let i = event.resultIndex; i < event.results.length; i++) {
		  const transcript = event.results[i][0].transcript;

		  if (event.results[i].isFinal) {
			setTranscription((prev) => prev + transcript + " "); // Add final text
		  } else {
			interimTranscript += transcript; // Show interim results
		  }
		}
	  };
  
	  // Error Handling
	  recognition.onerror = (event) => console.error("Speech Recognition Error: ", event.error);
	  recognitionRef.current = recognition;
  
	  return () => recognition.stop();  
	}, []);
  

	return (
		<main className="flex min-h-screen flex-col p-6 bg-gray-200">
			<Box sx={{display: 'flex', flexDirection: 'column', height: '100%', gap: 2}}>
				<Box sx={{display: 'flex', gap: 3, flexDirection: 'row'}}>
					{
						isRecording &&
						<ButtonStates 
						activeButtonProps={{color:'primary', variant:'outlined', text: 'Resume Recording',icon: <PlayArrowIcon/>, onClickFunc: resumeRecording}}
						defaultButtonProps={{color:'primary', variant:'outlined', text: 'Pause Recording',icon: <PauseIcon/>, onClickFunc: pauseRecording}}
						state={isPaused}/>
					}
					
					<ButtonStates 
					activeButtonProps={{color:'success', variant:'contained', text: 'Stop Recording',icon: <GraphicEqIcon/>,onClickFunc: stopRecording}}
					defaultButtonProps={{color:'primary', variant:'contained', text: 'Start Recording',icon: <MicIcon/>,onClickFunc: startRecording}}
					state={isRecording}/>

					<Timer seconds={seconds} />
				</Box>

				
				<Grid2 container sx={{ }}>
					<Grid2 size={{xs: 12, sm: 4, md: 4}}>
						<NotePad setState={setNotes}/>
					</Grid2>
					 
				</Grid2>
				

				 

			</Box>
			
		</main>
	);
}

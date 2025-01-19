'use client'
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { COLORS } from '@/app/util/constants/app-dimensions';
import AddIcon from '@mui/icons-material/Add';
 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { getTemplates, retrieveTemplates } from '@/lib/store/features/template';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

const rows = [
    createData('SOAP', 159, 6.0, 24, 4.0),
    createData('Referral', 237, 9.0, 37, 4.3),
    createData('Medical Certificate', 262, 16.0, 24, 6.0),
  ];
  

/**
 * @description Templates page where doctors can create custom templates
 * @param 
 * @returns 
 */
function Templates(){
    const dispatch = useAppDispatch()
    const templates = useAppSelector(getTemplates)

     
    useEffect(() => {
        dispatch(retrieveTemplates({profileId: 3}))
    },[])
    

    return (
        <main className="flex min-h-screen flex-col p-6">
			<Box sx={{display: 'flex', flexDirection: 'column', height: '100%', gap: 2, backgroundColor: COLORS.lightgreen200}}>
                <Typography variant='h4' sx={{marginBottom: 5}}>
                    Templates
                </Typography>
                
                <Button variant={'contained'} color={'primary'} onClick={() => {}} startIcon={<AddIcon/>} sx={{width: 250}}>
                    <Typography sx={{textTransform: 'none'}} >
                        Create template
                    </Typography>
                </Button>
        
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{backgroundColor: COLORS.grey200}}>
                            <TableRow>
                                <TableCell>Template Name</TableCell>
                                <TableCell align="right">Uses</TableCell>
                                <TableCell align="right">Last Used</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {templates.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.times_used}</TableCell>
                            <TableCell align="right">{row.last_used}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>


			</Box>
		</main>
    )
}

export default Templates

 
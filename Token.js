import { Typography, Grid, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useJwt}  from 'react-jwt'

const token = 'Your JWT'
function Token() {
  const [blue, setBlue] = useState([])
  const [blueprefix, setBluePrefix] = useState('')
  const [bluerow, setBlueRow] = useState([])
  const [red, setRed] = useState([])
  const [redprefix, setRedPrefix] = useState('')
  const [redrow, setRedRow] = useState([])

  const {decodedToken, isExpired} = useJwt(token)

  

  const handleGenerate = (e) => {
    e.preventDefault()
    console.log({ blue, blueprefix, bluerow, red, redprefix, redrow })
    alert('Token generate')
    setBlue(blue+1)
    setBluePrefix(blueprefix+1)
    setBlueRow(bluerow+1)
    setRed(red+1)
    setRedPrefix(redprefix+1)
    setRedRow(redrow+1)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    console.log('Tokens deleted')
  }

  return (
    <div>
      <Grid align='center' style={{ padding: '2%' }}>
        <Typography variant='h5' style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 'medium' }}>Token Generator Application</Typography>
      </Grid>
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <TextField variant='outlined' label='Number of blue tokens' onChange={(e) => setBlue(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField variant='outlined' label='Blue token Prefix' onChange={(e) => setBluePrefix(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField variant='outlined' label='Blue token per row' onChange={(e) => setBlueRow(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField variant='outlined' label='Number of red token' onChange={(e) => setRed(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField variant='outlined' label='Red token Prefix' onChange={(e) => setRedPrefix(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <TextField variant='outlined' label='Red token per row' onChange={(e) => setRedRow(e.target.value)}></TextField>
        </Grid>
        <Grid item>
          <Button variant='oulined' style={{ backgroundColor: 'gray' }} onClick={handleGenerate}>Generate</Button>
          <Button variant='oulined' style={{ backgroundColor: 'gray' }} onClick={handleCancel}>Cancel</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Token
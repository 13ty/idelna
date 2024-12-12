import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

function TopNavbar({ onSettingsClick }) {
  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={1}
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'background.paper'
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AI App Idea Generator
        </Typography>
        <IconButton color="primary" onClick={onSettingsClick}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopNavbar

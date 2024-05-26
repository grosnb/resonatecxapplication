import React from 'react';
import { AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material';
import ContactSearchBar from './ContactSearchBar';
import FadeMenu from './FadeMenu';

const ContactsToolBar = ({setSearchQuery, selectedType, setSelectedType}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 770,
        md: 1100,
        lg: 1200,
        xl: 1536,
      }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <FadeMenu selected={selectedType} setSelected={setSelectedType} />
          <ContactSearchBar setSearchQuery={setSearchQuery} />
        </Toolbar>
      </AppBar>
      {/* Used to prevent elements 'hiding' behind the fixed toolbar */}
      <Toolbar/>
    </ThemeProvider>
  )
}

export default ContactsToolBar
import React from 'react';
import { TextField } from '@mui/material';

const ContactSearchBar = ({setSearchQuery}) => {
  const handleQuery = React.useCallback((query) => {
    setSearchQuery(query);
  });
  return (
    <TextField label='Search' variant='standard'
      placeholder='Search' onChange={ e => handleQuery(e.target.value) } sx={{
        maxWidth: '600px',
        width: '100%',
        margin: '20px 20px 20px 20px',
        input: { color: 'white', fontFamily: 'inherit' },
      }}>
    </TextField>
  )
}

export default ContactSearchBar
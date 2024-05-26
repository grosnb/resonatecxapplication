import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const ContactCard = ({userData, setSelectedId}) => {
  const id = Number(userData.id);
  const name = userData.name;
  const username = userData.username;
  const email = userData.email;
  const phone = userData.phone;
  
  return (
    <Card variant='outlined' name={name} sx={{
      backgroundColor: 'background.paper',
      color: 'text.secondary',
      minWidth: '300px',
      width: '300px',
    }}>
      <CardActionArea onClick={() => {setSelectedId(id)}}>
        <CardContent>
          <Typography variant="body2" color='text.primary'>
            {name}
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            @{username}
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            {email}
          </Typography>
          <Typography variant="body2" color='text.secondary'>
            {phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ContactCard;

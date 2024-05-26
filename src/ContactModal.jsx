import { Modal, Box, Container } from '@mui/material';
import ProfilePic from './profile-icon.svg';

const ContactModal = ({userData, selectedId, handleClose}) => {
  if (userData) {
    const ariaLabel = userData.id + "-contact-modal";
    const ariaDesc = "detailed-contact-information-for" + userData.id;
    const name = userData.name;
    const username = userData.username;
    const email = userData.email;
    const address = userData.address.suite + ", " + userData.address.street + " Street, "
                    + userData.address.city + ", " + userData.address.zipcode;
    const phone = userData.phone;
    const website = userData.website;
    const company = userData.company.name;
    
    return (
      <Modal
        open={selectedId !== -1}
        onClose={handleClose}
        aria-labelledby={ariaLabel}
        aria-describedby={ariaDesc}
      >
        <Box sx={{ position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          maxWidth: '850px',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={ProfilePic} width='50px' height='50px' alt='contact-profile-pic' />
            <h2 id="contact-name" style={{margin: '0', textAlign: 'center'}}>{name}</h2>
            <h3 id="contact-username" style={{margin: '0', textAlign: 'center'}}>@{username}</h3>
          </Container>
          <p id="contact-information">Contact Information:</p>
          <ul>
            <li><a href={"mailto:" + email}>{email}</a></li>
            <li><a href={"https://" + website}>{website}</a></li>
            <li><a href={"tel:" + phone}>{phone}</a></li>
            <li><a href={"https://www.google.com.au/maps/search/" + address}>{address}</a></li>
          </ul>
          <p id="contact-company">
            Company: {company}
          </p>
        </Box>
      </Modal>
    );
  }
}

export default ContactModal;

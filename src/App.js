import './App.css';
import ContactsPage from './ContactsPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ContactsPage />
    </Container>
  );
}

export default App;

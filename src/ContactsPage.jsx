import { getContacts } from "./helper";
import React from "react";
import { Box, Grid, ThemeProvider, createTheme } from "@mui/material"
import ContactCard from "./ContactCard";
import ContactModal from "./ContactModal";
import ContactsToolBar from "./ContactsToolBar";

const ContactsPage = () => {
  const [contacts, setContacts] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(-1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("Name");

  const handleClose = () => {
    setSelectedId(-1);
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 770,
        md: 1100,
        lg: 1200,
        xl: 1536,
      }
    },
    palette: {
      background: {
        paper: '#f9f9f9'
      }
    }
  })

  React.useEffect(() => {
    const fetchContacts = async () => {
      try {
        setContacts(await getContacts());
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = contacts.filter((contact) => {
    const caseInsensitiveQuery = searchQuery.toLowerCase();
    let caseInsensitiveData = "";
    if (selectedType === "Company") {
      caseInsensitiveData = contact.company.name.toLowerCase();
    } else {
      caseInsensitiveData = contact[selectedType.toLowerCase()].toLowerCase();
    }
    return caseInsensitiveData.includes(caseInsensitiveQuery);
  }).sort((a, b) => {
    return a.name - b.name;
  });

  return (
    <ThemeProvider theme={theme}>
      <ContactsToolBar setSearchQuery={setSearchQuery} selectedType={selectedType} setSelectedType={setSelectedType} />
      <Box container sx={{ flexGrow: 1, margin: '50px', maxWidth: {sm: '770px', md: '1100px'}}}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 6, sm: 6, md: 6 }}>
          {filteredContacts.map((_, index) => (
            <Grid item xs={6} sm={3} md={2} key={index} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
              <ContactCard userData={filteredContacts[index]} setSelectedId={setSelectedId} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ContactModal userData={filteredContacts.find((user) => user.id === selectedId)} selectedId={selectedId} handleClose={handleClose}></ContactModal>
    </ThemeProvider>
  )
}

export default ContactsPage;

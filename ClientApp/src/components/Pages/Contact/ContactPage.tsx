import React from 'react';
import { useContactService } from '../../../dataProviders/contactProvider';
import { ContactContent, HeaderTitle, LocationAddress, LocationName, LocationPhone } from './StyledContactPage';

export const ContactPage = () => {
  const contact = useContactService();
  return (
    <ContactContent>
      <HeaderTitle>Store Location</HeaderTitle>
      <LocationName>{contact?.name}</LocationName>
      <LocationPhone>{contact?.phone}</LocationPhone>
      <LocationAddress>{contact?.address}</LocationAddress>
    </ContactContent>
  );
}
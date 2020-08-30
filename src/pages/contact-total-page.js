import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ContactList from '../components/contact-list';
import { ContactContext } from '../context/contact-context';
import FlashMessage, { flashErrorMessage } from '../components/flash-message';

export default function ContactTotalPage() {
  const [state, dispatch] = useContext(ContactContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-contactlist.herokuapp.com/contacts');
        dispatch({
          type: 'FETCH_CONTACTS',
          payload: response.data.data || response.data, // in case pagination is disabled
        });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);
  
  var totContact = state.contacts.length;
    return (
        <div>
          <h1>number of contacts is: <span id="tot">{totContact}</span></h1>
        </div>
        )
}
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import ContactTotalPage from './pages/contact-total-page';

const App = () => {
  return (
    <Container>
      <div className="ui three item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Contacts List
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/contacts/new"
        >
          Add Contact
        </NavLink>
        <NavLink className="item" activeClassName="active" exact to="/contacts/total">
          Number of Contacts
        </NavLink>
      </div>
      <Route exact path="/" component={ContactListPage} />
      <Route path="/contacts/new" component={ContactFormPage} />
      <Route path="/contacts/edit/:_id" component={ContactFormPage} />
      <Route path="/contacts/total" component={ContactTotalPage} />
    </Container>
  );
};

export default App;

class ContactPage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/contacts/new');
    }
  
    fillFormAndSubmit(name, email, address, phone) {
      cy.get('#contact_name').type(name);
      cy.get('#contact_email').type(email);
      cy.get('#contact_address').type(address);
      cy.get('#contact_phone').type(phone);
      cy.get('input[type="submit"]').click();
    }
  }
  
  export default ContactPage;
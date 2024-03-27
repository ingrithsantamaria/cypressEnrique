class AddUserPage {
    visit() {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    }
  
    clickaddUser() {
      cy.get('#add-contact').click();
      
    }
  }
  
  export default AddUserPage;
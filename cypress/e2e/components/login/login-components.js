class LoginPage {
    navigate() {
      cy.visit('/');
    }
  
    fillFormAndSubmit(email, password) {
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('#submit').click();
      
    }
  }
  
  export default LoginPage;
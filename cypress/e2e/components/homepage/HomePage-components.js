class HomePage {
    navigate() {
      cy.visit('/');
    }
  
    clickSignup() {
      cy.get('#signup').click();
      
    }
  }
  
  export default HomePage;
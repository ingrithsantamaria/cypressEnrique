class RegistroPage {
 navigateRegistro() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
  }

  fillFormAndSubmit() {
    cy.get('#firstName').type('pepe');
    cy.get('#lastName').type('Trueno');
    cy.get('#email').type('enriquecypress07@gmail.com');
    cy.get('#password').type('Enrique!');
    cy.get('#submit').click();
  }
  addUsers() {
    cy.get("button#add-contact").click()
  }
}

export default RegistroPage;
class FormPage {
    fillForm(firstName, lastName, birthdate, email, phone, street1, city, stateProvince, postalCode, country) {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#birthdate').type(birthdate);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#street1').type(street1);
        cy.get('#city').type(city);
        cy.get('#stateProvince').type(stateProvince);
        cy.get('#postalCode').type(postalCode);
        cy.get('#country').type(country); 
        cy.get('#submit').click();
    }
}

export default FormPage;
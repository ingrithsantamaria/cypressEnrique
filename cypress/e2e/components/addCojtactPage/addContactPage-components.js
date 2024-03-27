class AddContactPage {
    constructor() {
        // this.url = 'https://thinking-tester-contact-list.herokuapp.com/'; 
        this.firstNameInput = '#firstName';
        this.lastNameInput = '#lastName';
        this.birthdateInput = '#birthdate';
        this.emailInput = '#email';
        this.phoneInput = '#phone';
        this.street1Input = '#street1';
        this.cityInput = '#city';
        this.stateProvinceInput = '#stateProvince';
        this.postalCodeInput = '#postalCode';
        this.countryInput = '#country';
        this.submit = '#submit';
    }

    // visit() {
    //     cy.visit(this.url);
    // }

    fillForm(firstName, lastName, birthdate, email, Phone, street1, city, stateProvince, postalCode,country) {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.birthdateInput).type(birthdate);
        cy.get(this.emailInput).type(email);
        cy.get(this.phoneInput).type(Phone);
        cy.get(this.street1Input).type(street1);
        cy.get(this.cityInput).type(city);
        cy.get(this.stateProvinceInput).type(stateProvince);
        cy.get(this.postalCodeInput).type(postalCode);
        cy.get(this.countryInput).type(country);


    }

    submitForm() {
        cy.get(this.submit).click();
    }
}

export default AddContactPage;
import { textInput } from "../components/textinput/textInput-components";
import { faker } from '@faker-js/faker';
describe('Visualization of header components', () => {
    it('ingresar mi nombre en el input', () => {
        cy.visit('http://uitestingplayground.com/textinput');
        textInput.formGroup.inputMyButton.should('exist').and('be.visible');
        const nombreAleatorio = faker.name.firstName();
        textInput.formGroup.inputMyButton.type(nombreAleatorio);
        textInput.buttons.buttonToChange.click();
        textInput.buttons.buttonToChange.should('have.text', nombreAleatorio);
    });
}); 
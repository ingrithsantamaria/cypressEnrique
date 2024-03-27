export class textInput {
    static get formGroup() {
        return {
            get inputMyButton() {
                return cy.get('[id="newButtonName"]');
            },
        }
    }
    static get buttons() {
        return {
            get buttonToChange() {
                return cy.get('[id="updatingButton"]');
            },
        }
    }
}
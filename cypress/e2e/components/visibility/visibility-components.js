export default class VisibilityPage {
    visit() {
      cy.visit('http://uitestingplayground.com/visibility');
    }
  
    clickHideButton() {
      cy.get('#hideButton').click();
    }
  
    isElementVisible(selector) {
      cy.get('#visible').should('have.css', 'display', 'block');
    }
  
    isElementNotVisible(selector) {
      cy.get('#invisible').should('not.exist');
      
      
    }
  }
  
  
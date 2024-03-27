import { ProgressBar } from "../components/porogressbar/progressbar-components";
const progress = new ProgressBar()
describe('template spec', () => {
    beforeEach(() => {
      cy.visit('http://uitestingplayground.com/progressbar')
    
    });
    it('User progress Bar', () => {
      progress.startProgressBar()
      progress.stopProgressBarAt75Percent()
    })
})
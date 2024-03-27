import 'cypress-wait-until';
export class ProgressBar {
  elements = {
    getStarBtn: () => cy.get("#startButton"),
    getStopBtn: () => cy.get("#stopButton"),
    getProgressBar: () => cy.get("div#progressBar"),
  };
  startProgressBar() {
    this.elements.getStarBtn().click();
  }

  stopProgressBarAt75Percent() {
    const stopAt75 = () => {
        this.elements.getProgressBar().invoke('text').then((text) => {
            const percentage = parseInt(text.replace('%', ''))
            if(percentage === 75){
                this.elements.getStopBtn().click()
            }else {
                cy.wait(100).then(stopAt75)
            }
        })
    }
   stopAt75()
  }
}
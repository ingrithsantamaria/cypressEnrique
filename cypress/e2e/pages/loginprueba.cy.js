import HomePage from '../components/homepage/HomePage-components';
import RegistroPage from '../components/registro/registro-components';
import LoginPage from '../components/login/login-components';
import AddUserPage from '../components/adduser/addUser-components';
import AddContactPage from '../components/addCojtactPage/addContactPage-components';
const addContactPage = new AddContactPage();
const addUserPage = new AddUserPage();
describe('Proceso de registro y manejo de contactos', () => {
    it('Debería registrar un usuario, iniciar sesión y crear contactos', () => {
        const homePage = new HomePage();
        homePage.navigate();
        homePage.clickSignup();

        const registroPage = new RegistroPage();
        registroPage.fillFormAndSubmit();

        const email = 'enriquecypress4@gmail.com';
        const password = 'Enrique!';

        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.fillFormAndSubmit(email, password);

        
        addUserPage.clickaddUser();

        cy.task('parseCsv', { filePath: 'users.csv' }).then((users) => {
            users.forEach((user) => {
                addContactPage.fillForm(
                    user.firstName,
                    user.lastName,
                    user.birthdate,
                    user.email,
                    user.phone,
                    user.street1,
                    user.city,
                    user.stateProvince,
                    user.postalCode,
                    user.country
                );
                addContactPage.submitForm();
                
            });
            
    });
    addUserPage.clickaddUser();
});
});













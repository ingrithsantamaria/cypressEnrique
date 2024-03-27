import RegistroPage from "../components/registro/registro-components";
import LoginPage from "../components/login/login-components";
import ContactPage from "../components/contac/contac-components";
import FormPage from "../components/contactpage/formPage-components";
const registroPage = new RegistroPage();
const loginPage = new LoginPage();
const contactPage = new ContactPage();
const formPage = new FormPage();

describe("Proceso de registro y manejo de contactos", () => {
  it("Login con datos registrados y creación nuevos contactos", () => {
    loginPage.navigate();
    const userEmail = "enriquecypress7@gmail.com";
    const userPassword = "Enrique!";
    loginPage.fillFormAndSubmit(userEmail, userPassword);
    registroPage.addUsers();
    cy.task("parseCsv", { filePath: "users.csv" }).then((contacts) => {
      contacts.forEach((contact) => {
        formPage.fillForm(
          contact.firstName,
          contact.lastName,
          contact.birthdate,
          contact.email,
          contact.phone,
          contact.street1,
          contact.city,
          contact.stateProvince,
          contact.postalCode,
          contact.country
        );
        registroPage.addUsers();
      });
    });

    // Cerrar sesión
    cy.get("button#logout").click();

  });
  it("Debería registrar un usuario, iniciar sesión y crear contactos", () => {
    registroPage.navigateRegistro();
    registroPage.fillFormAndSubmit();
    registroPage.addUsers();
    cy.task("parseCsv", { filePath: "users.csv" }).then((contacts) => {
      contacts.forEach((contact) => {
        formPage.fillForm(
          contact.firstName,
          contact.lastName,
          contact.birthdate,
          contact.email,
          contact.phone,
          contact.street1,
          contact.city,
          contact.stateProvince,
          contact.postalCode,
          contact.country
        );
        registroPage.addUsers();
      });
    });

    // Cerrar sesión
    cy.get("button#logout").click();
  });
});

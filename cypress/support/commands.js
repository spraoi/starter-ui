import Amplify, { Auth } from 'aws-amplify';
import config from '../../src/config.json';

Cypress.Commands.add('authenticateTestUser', async function () {
  Amplify.configure(config.amplify);
  await Auth.signIn('cade@spraoi.ai', 'cade@spraoi.ai');
});

Cypress.Commands.add('chooseDropdownOption', function (selector, search) {
  cy.get(`${selector} input`)
    .first()
    .click({ force: true })
    .type(`${search}{enter}`);
});

Cypress.Commands.add('setName', function (name = 'item') {
  cy.wrap(`cypress-test-${name}`).as('name');
});

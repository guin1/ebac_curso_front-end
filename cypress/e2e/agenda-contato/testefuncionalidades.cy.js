describe('Testes de funcionalidades na agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Guilherme Barbosa');
    cy.get('input[placeholder="E-mail"]').type('guiemail@example.com');
    cy.get('input[placeholder="Telefone"]').type('12345-67890');
    cy.get('.adicionar').click();
    cy.get('.sc-beqWaB.eQdhbg.contato').contains('Guilherme Barbosa').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.get('input[placeholder="Nome"]').type('Guilherme Barbosa');
    cy.get('input[placeholder="E-mail"]').type('guiemail@example.com');
    cy.get('input[placeholder="Telefone"]').type('12345-67890');
    cy.get('.adicionar').click();

    cy.get('.edit').first().click();
    cy.get('input[placeholder="Nome"]').clear().type('Guilherme Barbosa Novo');
    cy.get('input[placeholder="E-mail"]').clear().type('novoemail@example.com');
    cy.get('input[placeholder="Telefone"]').clear().type('98765-43210');
    cy.get('.alterar').click();
    cy.get('.cancelar').click();

    cy.get('.sc-beqWaB.eQdhbg.contato').contains('Guilherme Barbosa Novo').should('exist');
    cy.get('.sc-beqWaB.eQdhbg.contato').contains('novoemail@example.com').should('exist');
    cy.get('.sc-beqWaB.eQdhbg.contato').contains('98765-43210').should('exist');
  });

  it('Deve remover um contato existente', () => {
    cy.get('input[placeholder="Nome"]').type('Contato a ser removido');
    cy.get('input[placeholder="E-mail"]').type('contato@example.com');
    cy.get('input[placeholder="Telefone"]').type('12345-67890');
    cy.get('.adicionar').click();

    cy.get('.delete').last().click();
  });
});

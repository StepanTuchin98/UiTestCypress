context('blazedemo', () => {
  beforeEach(() => {
    cy.visit('http://blazedemo.com/index.php')
})

  it('Check price is equals',  () => {
    cy.get('form > select:nth-child(1)').select('Philadelphia');
    cy.get('form > select:nth-child(1)').should('have.value', 'Philadelphia');


    cy.get('form > select:nth-child(4)').select('New York');
    cy.get('form > select:nth-child(4)').should('have.value', 'New York');

    cy.get("input[type='submit']").click();

    cy.get('table > thead > tr > th:nth-child(4)').should('have.text', 'Departs: Philadelphia');
    cy.get('table > thead > tr > th:nth-child(5)').should('have.text', 'Arrives: New York');



    cy.get('body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(7)').then(($price) => {

      const $pricetxt = $price.text();

      cy.get('body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > input').click();

      cy.get('body > div.container > p:nth-child(4)').should(($priceReceipt) => {
        expect($priceReceipt.text().substring(7)).to.eq($pricetxt.substring(1))
      })
    })
  })
})

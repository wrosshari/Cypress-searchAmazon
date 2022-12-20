const productName = "polaroid camera"

describe('search amazon', () => {
  it('Validate keyword recommendation', () => {
    cy.searchProduct(productName)
    
    cy.get('[class="s-suggestion-container"]').find('div')
    .should(($div) => {
      //checking length of recommendation words
      expect($div).to.have.length(10);
      //validate reommendation words
      expect($div.text()).to.contain(productName)
    })
  })
  
    
  it.only('search and find product', () => {
    cy.searchProduct(productName)
    cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion').click()

    //checking keyword for search result
    cy.get('[data-component-type="s-result-info-bar"]').find('span')
    .should(($span) => {
      expect($span.text()).to.contain(productName)
      })
    })
})
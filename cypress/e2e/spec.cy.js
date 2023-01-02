describe('email spelling test', () => {
    it('check data', () => {
        cy.visit('http://localhost:3000/signin')

        cy.get('#input-email').type('eegdfdaf')  // 適当なメールアドレスを渡す
        cy.get('#submit').click()  // 登録ボタンを押す
        cy.get('.error-message').should('have.text', '正式なメールアドレスではありません')  
    })
})
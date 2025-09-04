/// <reference types="cypress"/> 

import { randomMail } from "../../support/commands/newCommands"

context('Tela de cadastro', () => {

    var cenario = 2
    var teste = 2

    describe(`${cenario} - Validação de acesso a tela de cadastro.`, () => {

        var complemento = 1

        beforeEach(() => {
            cy.VisitaTelaCadastro()
            cy.LoginNovoUsuario()
            cy.get(':nth-child(1) > b')
                
        })

        it(`${teste}.${complemento} - Validar chekbox vazio.`, () => {
            cy.get('#id_gender1')
                .should('not.be.checked');

        });
        it(`${teste}.${++complemento} - Validar chekbox selecionada`, () => {
            cy.get('#id_gender1')
                .check()
                .should('be.checked');
        })

        //Validar campo Name vazio
        it(`${teste}.${++complemento} - Validar campo Name vazio`, () => {
            cy.get('#name')
                .should('not.have.value', '');
        })

        //Validar preenchimento do campo Nome
        it(`${teste}.${++complemento} - Validar preenchimento do campo Nome - Deve apresentar informação`, () => 
        {
            cy.get('#name').invoke('val')
            .should('not.be.empty')

        })

        it.only(`${teste}.${++complemento} - Validar preenchimento do campo Nome - Deve apresentar mesmo nome registrado`, () => 
        {

            cy.get('[data-qa="name"]')
                //.should('be.visible')
                .should('have.value', randomMail)            
        })
    })
})

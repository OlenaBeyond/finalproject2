describe('', () => {
 
    


    it('PostsAPI ', () => {
    
      cy.log(`Get all posts`)
    cy.request({
        method: 'Get',
        url: '/posts',
        failOnStatusCode: false
      }).then( response => {
        expect(response.status).to.be.equal(200);
       
      })

      
        cy.log(`Delete non-existing post entity`)
      
        cy.request({
          method: 'Delete',
          url: '/posts',
          id: '333',
          failOnStatusCode: false
        }).then( response => {
          expect(response.status).to.be.equal(404);
          
        })

        cy.log(`Update non-existing entity`)
      
        cy.request({
          method: 'PUT',
          url: '/posts',
          ids: '2',
          failOnStatusCode: false
        }).then( response => {
          expect(response.status).to.be.equal(404);
          
        })

        cy.log(`Create post entity`)
      
        cy.request({
          method: 'POST',
          url: '/posts',
          body:{
            "userId": 1,
            "id": 102,
            "title": "test",
            "body": "text"
        },
          failOnStatusCode: false
        }).then( response => {
          expect(response.status).to.be.equal(201);
          
        })

        cy.log(`Get posts with id = 55 and id = 60.`)
      
        cy.request({
          method: 'GET',
          url: '/posts',
          id: '55',
          id: '60',
        
          failOnStatusCode: false
        }).then( response => {
          expect(response.status).to.be.equal(200);
         
          
        })
     
      })
      
    })
      
    
    
  

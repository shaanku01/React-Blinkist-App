function testHeader(){
    cy.get('[data-testid="blinkist-logo"]').should('be.visible').wait(1000);
    cy.get('[data-testid="searchIcon-button"]').should('be.visible').wait(1000);
    cy.get('[data-testid="main-header"] > :nth-child(4) > :nth-child(1)').should('be.visible').wait(1000);
    cy.get('[data-testid="main-header"] > .MuiGrid-grid-xs-4').should('be.visible').wait(1000);
    cy.get('[data-testid="account-dropdown-button"]').should('be.visible').wait(1000);

}

describe("App Testing",()=>{

    it("Testing the MyLibrary Page",()=>{
        cy.visit("http://localhost:3000/");     
        testHeader();

        //Heading Check:
        cy.get('.h1').should('have.text',"My Library").wait(2000);

        //Tabs Check::
        cy.get('.MuiTabs-flexContainer').should('be.visible').wait(2000);

        //Check if the Cards are moving across the Tabs:
        cy.get('.Mui-selected').click().wait(2000);
        cy.get(':nth-child(1) > [data-testid="mainDiv"]').should('be.visible').wait(2000);
        cy.get(':nth-child(1) > [data-testid="mainDiv"] > :nth-child(5) > .css-9yjfll-MuiGrid-root > [data-testid="final-btn"]').click().wait(2000);
        cy.get('[tabindex="-1"]').click().wait(2000);
        cy.get(':nth-child(1) > [data-testid="mainDiv"]').should('be.visible').wait(2000);

        //Check if the Search bar is working..
        cy.get('[data-testid="searchIcon-button"]').should('be.visible').wait(1000);
        cy.get('[data-testid="searchIcon-button"]').click().wait(2000);
        cy.get('.MuiInput-root').should('be.visible').wait(1000);
        cy.get('.MuiInput-root') .type("B").wait(2000);
        cy.get(':nth-child(4) > .searchbar_dataItem__3-xE-').should('be.visible').wait(1000);
        cy.get(':nth-child(4) > .searchbar_dataItem__3-xE-').click().wait(2000);
        cy.url().should("include", "/detailed").wait(1000);
        cy.get('.MuiGrid-grid-xs-4').click().wait(1000);

        //Check if the footer exists:
        cy.get('#footer_boxes__1MlLO').should('be.visible').wait(1000);
    });

    it("Testing the Explore Button",()=>{
        cy.get('[data-testid="explore-button"]').click().wait(1000);
        cy.get('.css-1fkyx8n-MuiGrid-root').should('be.visible').wait(1000);
        cy.get('[data-testid="explore-button"]').click().wait(1000);
        cy.get('.css-1fkyx8n-MuiGrid-root').should('not.exist').wait(1000);
    });

    it("Testing the Entrepreneurship Page",()=>{
        cy.visit("http://localhost:3000/");
        cy.get('[data-testid="explore-button"]').click().wait(2000);
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="menu-Item"] > [data-testid="menuText"] > .body2').should('be.visible').wait(1000);
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="menu-Item"] > [data-testid="menuText"] > .body2').click().wait(2000);
        cy.url().should("include", "/entrepreneurship").wait(1000);
        testHeader();
        //Check if banner is visible:
        cy.get('.Banner_parent__oG0vx').should('be.visible').wait(1000);
        //Check if the Search Bar is Visible:
        cy.get('[data-testid="searchInput"]').wait(1000);

        cy.get(':nth-child(1) > .h3').should('be.visible').wait(1000);
        cy.get(':nth-child(3) > .h3').should('be.visible').wait(1000);
        cy.get(':nth-child(5) > .h3').should('be.visible').wait(1000);

        //Checking the Search Bar Functionality:

        cy.get('.MuiInput-input').type("Beyond Entrepreneurship").wait(1000);
        cy.get('#card_maindiv__WMkcB').should('be.visible').wait(1000);
        cy.get('[data-testid="Headnav"] > .subtitle3').should('have.text',"Beyond Entrepreneurship").wait(1000);
        cy.get('[data-testid="Headnav"] > .subtitle3').click().wait(1000);
        cy.url().should("include","/detailed").wait(1000);
        cy.get('[data-testid="explore-button"]').click().wait(2000);
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="menu-Item"] > [data-testid="menuText"] > .body2').should('be.visible').wait(1000);
        cy.get(':nth-child(3) > :nth-child(1) > [data-testid="menu-Item"] > [data-testid="menuText"] > .body2').click().wait(2000);
        //Footer Check::
        cy.get('#footer_boxes__1MlLO').should('be.visible').wait(1000);
    });

    it("Detailed View Page",()=>{
        cy.visit("http://localhost:3000/");
        cy.get(':nth-child(1) > [data-testid="mainDiv"] > [data-testid="Headnav"] > .subtitle3').click().wait(1000);
        cy.url().should("include","/detailed").wait(1000);
        testHeader();
        cy.get('.h1').should('be.visible').wait(1000);
        cy.get('.subtitle5').should('be.visible').wait(1000);
        //Checking if the 3 buttons are visible:
        cy.get('.MuiButton-outlined').should('be.visible').wait(1000);
        cy.get('[data-testid="navigate-btn"] > .MuiButton-root').should('be.visible').wait(1000);
        cy.get('[data-testid="toexist"] > div > .MuiButton-root').should('be.visible').wait(1000);

        //Footer Check
        cy.get('#footer_boxes__1MlLO').should('be.visible').wait(1000);

        //Tabs Check:
        cy.get('.MuiTabs-flexContainer').should('be.visible').wait(1000);
        cy.get('[data-testid="tabpanel"] > .caption3').should('be.visible').wait(1000);

        //Test the Kindle Button:
        cy.get('[data-testid="toexist"] > div > .MuiButton-root').click().wait(2000);

        //Modal-1 Check:
        cy.get('#mui-1').should("have.text","Set up your Kindle").wait(1000);
        cy.get('.MuiDialogContentText-root > h5').should('be.visible').wait(1000);
        cy.get('b').should('be.visible').wait(1000);
        cy.get(':nth-child(3) > h5').should('be.visible').wait(1000);
        cy.get('#demo-customized-textbox').type('shankersai.gr').type("{enter}").wait(1000);
        cy.get('.MuiGrid-grid-xs-12 > .MuiButton-root').click().wait(2000);

        //Modal-2 Check::

        cy.get('#mui-2').should('be.visible').wait(1000);
        cy.get('h1').should('be.visible').wait(1000);
        cy.get('h4').should('be.visible').wait(1000);
        cy.get('.MuiGrid-grid-xs-12 > .MuiButton-root').should('be.visible').wait(1000);
        cy.get('.MuiGrid-grid-xs-12 > .MuiButton-root').click().wait(2000);
        cy.url().should("include","/").wait(1000);
        
        //Check the finished button:
        cy.get(':nth-child(1) > [data-testid="mainDiv"] > [data-testid="Headnav"] > .subtitle3').click().wait(1000);
        cy.get('[data-testid="navigate-btn"] > .MuiButton-root').click().wait(2000);
        cy.url().should("include","/").wait(1000);
        cy.get('[tabindex="-1"]').click().wait(1000);
        cy.get(':nth-child(4) > [data-testid="mainDiv"]').should('be.visible').wait(1000);







    })
})
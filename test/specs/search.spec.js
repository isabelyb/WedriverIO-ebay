import SearchPage from '../pageObjects/search.page.js';

describe('Ebay product search', () => {
    it('should display the search results count after performing a search on eBay', async() => {
        //Navigate to eBay's homepage
        await SearchPage.navigate();

        //Perform a search
        await SearchPage.searchFor('tornillos');

        // Obtain results from search
        const resultsText = await SearchPage.resultsCount.getText();
        console.log(resultsText, 'results for tornillos');        

    });
});
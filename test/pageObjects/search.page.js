class SearchPage{
    //Method to navigate to the ebay website
    async navigate() {
        await browser.url('https://www.ebay.com');
    }

    //Search input selector
    get searchInput(){
        return $('#gh-ac');
    }

    // Search button selector
    get searchButton() {
        return $('#gh-btn');
    }

    // resultCount selector
    get resultsCount() {
        return $('.srp-controls__count > h1 > span:nth-child(1)');
    }

    // Method to search
    async searchFor(item) {
        await this.searchInput.waitForExist({ timeout: 5000 });
        await this.searchInput.setValue(item);
        await this.searchButton.waitForExist({ timeout: 5000 });
        await this.searchButton.click();
    }
}

export default new SearchPage();
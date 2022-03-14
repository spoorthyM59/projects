let homesearch = function(){
    let searchBox_input = element(by.id('gh-ac'));
    let clickButton = element(by.id('gh-btn'));
    browser.waitForAngularEnabled(false);
        
    

    this.get = function(url){
        browser.get(url);
    }


    this.searchProduct = function(search_product){
        searchBox_input.sendKeys(search_product);
    };
   
    this.clickGo = function(){
        clickButton.click();
    };
   
};

module.exports = new homesearch();
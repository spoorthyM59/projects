let homesearch = require('../pages/homesearch.js');


describe('search product', function(){

    it('search test', function(){
       
         homesearch.get('https://www.ebay.com/');

        homesearch.searchProduct('laptop');
       
        homesearch.clickGo();

        browser.sleep(2000)


    });
});


































//describe('calculator tests', function(){

   // it('addition test', function(){
       // browser.waitForAngularEnabled(false);
        //browser.get('https://www.ebay.com/');
        //browser.waitForAngularEnabled(false);
        
        //element(by.id('gh-ac')).sendKeys('laptop');
        //element(by.id('gh-btn')).click();
        
        
        


       
    
        //element(by.model('second')).sendKeys(2);
        
        //element(by.cssContainingText('.ng-binding','4'));
        //let result = element(by.cssContainingText('.ng-binding', '4'));
        //expect(result.getText()).toEqual('4');
       



        //browser.sleep(2000)


  //  });
//});
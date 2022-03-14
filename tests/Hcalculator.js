let homepage = require('../pages/homepage.js');


describe('calculator tests', function(){

    it('addition test', function(){
       // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys(2);
        homepage.enterfirstnumber('4');

        //element(by.model('second')).sendKeys(2);
        homepage.entersecondnumber('3');

        //element(by.css('[ng-click="doAddition()"')).click();
        homepage.clickGo();

        //element(by.cssContainingText('.ng-binding','4'));
        //let result = element(by.cssContainingText('.ng-binding', '4'));
        //expect(result.getText()).toEqual('4');
        homepage.verifyResult('7');
       



        browser.sleep(2000)


    });
});

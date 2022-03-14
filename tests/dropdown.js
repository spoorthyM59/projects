describe('drop down', function(){

    it('test', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
       
        //way 1
        element(by.model('operator')).element(by.css("option[value='MODULO']")).click();
        browser.sleep(2000)

         //way 2
        element.all(by.options('value for (key, value) in operators')).get(4).click();
        browser.sleep(2000)

        // way 3
        element(by.cssContainingText('option','+')).click();
        browser.sleep(2000)
        
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(2);
        element(by.css('[ng-click="doAddition()"')).click();
        element(by.cssContainingText('.ng-binding','4'));
        let result = element(by.cssContainingText('.ng-binding', '4'));
        expect(result.getText()).toEqual('4');

        browser.sleep(2000)






    });
});

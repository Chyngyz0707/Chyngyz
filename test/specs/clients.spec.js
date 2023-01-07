const LoginPage = require('../pageobjects/LoginPage')
const ClientPage = require('../pageobjects/ClientPge')




describe('Clients test', () => {

    it('should create new client', async ()=> {
        await browser.url(browser.options.baseurl);
        await LoginPage.doLogin();
        // шаги открытия формы клиента и заполнения
        await( await browser.$('button.clients-add-user-dialog')).click();
        await browser.pause(5000);


    })
})
const LoginPage = require('../pageobjects/LoginPage');

describe('Login page on Navigator CRM',() => {
    beforeEach('Setup browser', async() => {
        await browser.url('//167.114.201.175:5000/ login');
    })
    afterEach('Clear browser', async()=>{
        await browser.reloadSession();
    })


it('should login', async ()=>{
    //перейти по странице
    await browser.url('//167.114.201.175:5000/ login');
    //ввести логин
    // await LoginPage.loginField.setValue('Admin');
    await LoginPage.doLogin();
     //ввести пароль
    // await LoginPage.passwordField.setValue('Admin@Navi');
     //нажать на кнопку Вход
    // await LoginPage.submitButton.click();
     await expect(browser).toHaveUrlContaining('clients');
})

it('should fail login', async () => {
     //перейти по странице
   // await browser.url('//167.114.201.175:5000/ login');
    //ввести логин
   //  await LoginPage.loginField.setValue('Admin');
   await LoginPage.doLogin("Admin", "InvalidPassword");
     //ввести пароль
    // await LoginPage.passwordField.setValue('Admin@Navi1');
     //нажать на кнопку Вход
    // await LoginPage.submitButton.click();
     await expect(browser).toHaveUrlContaining('login');
})
})
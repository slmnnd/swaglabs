import {driver} from '@wdio/globals'
import LoginPage from '../pageobjects/login-page.page.js'

describe('<<<<<<<<<< LOGIN TESTING >>>>>>>>>>', function(){    

    //negative
    it('User login tanpa menginput apapun', async function(){        
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);

        await expect(LoginPage.errorUname).toHaveText('Username is required') //?        

    })

    //negative
    it('User login dengan username yang benar dan password yang kosong', async function(){
        await LoginPage.loginInput('standart_user', '')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);

        await expect(LoginPage.errorPass).toHaveText('Password is required')
        
    })

    //negative
    it('User login dengan username yang kosong dan password yang benar', async function(){
        await LoginPage.loginInput('', 'secret_sauce')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);

        await expect(LoginPage.errorUname).toHaveText('Username is required')
        
    })

    //negative
    it('User login dengan username yang salah dan password yang benar', async function(){
        await LoginPage.loginInput('user', 'secret_sauce')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);

        await expect(LoginPage.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username uppercase dan password yang benar', async function(){
        await LoginPage.loginInput('PROBLEM_USER', 'secret_sauce')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);   

        await expect(LoginPage.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username yang benar dan password uppercase', async function(){
        await LoginPage.loginInput('locked_out_user', 'SECRET_SAUCE')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);   

        await expect(LoginPage.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username yang benar dan password yang salah', async function(){        
        await LoginPage.loginInput('standard_user', 'pass')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);

        await expect(LoginPage.errorMsg).toHaveText('Username and password do not match any user in this service.')
    })

    //positive
    it('User login dengan username yang benar dan password yang benar', async function(){
        await LoginPage.loginInput('problem_user', 'secret_sauce')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);    
        
        await expect(LoginPage.txtHomepage).toHaveText('PRODUCTS')
    })
})


import {driver} from '@wdio/globals'
import login from '../pageobjects/login.page.js'

describe('<<<<<<<<<< LOGIN TESTING >>>>>>>>>>', function(){    

    //negative
    it('User login tanpa menginput apapun', async function(){
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorUname).toHaveText('Username is required') //?        

    })

    //negative
    it('User login dengan username yang benar dan password yang kosong', async function(){
        await login.usernameInput('standard_user')
        await login.nullPassword()
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorPass).toHaveText('Password is required')
        
    })

    //negative
    it('User login dengan username yang kosong dan password yang benar', async function(){
        await login.nullUsername()
        await login.passwordInput('secret_sauce')
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorUname).toHaveText('Username is required')
        
    })

    //negative
    it('User login dengan username yang salah dan password yang benar', async function(){
        await login.loginInput('user', 'secret_sauce')
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username uppercase dan password yang benar', async function(){
        await login.loginInput('PROBLEM_USER', 'secret_sauce')
        await login.clickLoginBtn()
        await driver.pause(3000);   

        await expect(login.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username yang benar dan password uppercase', async function(){
        await login.loginInput('locked_out_user', 'SECRET_SAUCE')
        await login.clickLoginBtn()
        await driver.pause(3000);   

        await expect(login.errorMsg).toHaveText('Username and password do not match any user in this service.')
        
    })

    //negative
    it('User login dengan username yang benar dan password yang salah', async function(){        
        await login.loginInput('standard_user', 'pass')
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorMsg).toHaveText('Username and password do not match any user in this service.')
    })

    //positive
    it('User login dengan username yang benar dan password yang benar', async function(){
        await login.loginInput('problem_user', 'secret_sauce')
        await login.clickLoginBtn()
        await driver.pause(3000);    
        
        await expect(login.txtHomepage).toHaveText('PRODUCTS')
    })
})

describe.skip('<<<<<<<<<< HOMEPAGE TESTING >>>>>>>>>>', function(){
    it('User mengecek Produk Sauce Labs Backpack', async function(){

    })

    it('', async function(){

    })

    it('', async function(){

    })
    it('', async function(){

    })
    it('', async function(){

    })
    it('', async function(){

    })
})
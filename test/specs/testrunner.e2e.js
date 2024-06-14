import {driver} from '@wdio/globals'
import login from '../pageobjects/login.page.js'
import homepage from '../pageobjects/homepage.page.js'
import scroll from '../handlers/scroll.js'

describe('<<<<<<<<<< LOGIN TESTING >>>>>>>>>>', function(){    

    //negative
    it('User login tanpa menginput apapun', async function(){
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorUname).toHaveText('Username is required') //?        

    })

    //negative
    it.only('User login dengan username yang benar dan password yang kosong', async function(){
        await login.loginInput('standart_user', '')
        await login.clickLoginBtn()
        await driver.pause(3000);

        await expect(login.errorPass).toHaveText('Password is required')
        
    })

    //negative
    it.only('User login dengan username yang kosong dan password yang benar', async function(){
        await login.loginInput('', 'secret_sauce')
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
    it('User mengecek Produk Sauce Labs Backpack', async function(){ //error
        await homepage.checkBackpack()
        await driver.pause(3000) 
        await scroll(400, 300)
        // await scroll(300, 500)
        
        await expect(homepage.txtBackpack).toHaveText(homepage.titleBackpack)
    })

    it('User menambahkan Produk Sauce Labs Backpack ke dalam keranjang', async function(){
        await homepage.addProductToCart()
        
        await expect(homepage.txtCart).toHaveText(homepage.titleBackpack)

    })

    it('User menghapus Produk dari dalam keranjang', async function(){
        // await driver.back()

    })
    it('User mengurutkan produk berdasarkan abjad A hingga Z', async function(){

    })
    it('User mengurutkan produk berdasarkan harga Low hingga High', async function(){

    })
    it('User memasukkan semua produk ke dalam keranjang', async function(){

    })
    it('User membatalkan melakukan sorting produk', async function(){

    })
})
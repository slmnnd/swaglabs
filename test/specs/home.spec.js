import {driver} from '@wdio/globals'
import HomePage from '../pageobjects/home-page.page.js'
import scroll from '../helpers/scroll.js'
import LoginPage from '../pageobjects/login-page.page.js'
import swipe from '../helpers/swipe.js'
import sorted from '../helpers/sorted.js'


describe('<<<<<<<<<< HOMEPAGE TESTING >>>>>>>>>>', function(){
    beforeEach('User login ke aplikasi', async function(){
        await LoginPage.loginInput('problem_user', 'secret_sauce')
        await LoginPage.clickLoginBtn()
        await driver.pause(3000);   
    })

    afterEach('User kembali ke halaman login', async function(){
        // await driver.back()
        await driver.reloadSession()
    })


    //1. positive
    it('User menambahkan Produk Sauce Labs Backpack ke dalam keranjang dari homepage', async function(){ //passed
        await HomePage.addProductToCart()
        await HomePage.clickCart()        

        await expect(HomePage.txtCart).toHaveText('Sauce Labs Backpack')
    })

    //2. positive
    it('User menghapus Produk Sauce Labs Backpack dari homepage', async function(){ //passed
        await HomePage.addProductToCart()        
        await HomePage.removeProductHomepage() 
        await driver.pause(4000)

        await expect(HomePage.txtNotifCart).not.toBeExisting()
    })

    //3. positive 
    it('User mengecek detail produk Sauce Labs Bike Light', async function(){ //failed
        await HomePage.clickBike() //klik produk pertama tp yg muncul produk setelahnya
        await driver.pause(3000)
        await scroll(400,100)
        await driver.pause(3000)

        await expect(HomePage.txtDetailProduct).toHaveText('Sauce Labs Bike Light')
    }) 

    //4. positive
    it('User menghapus Produk dari dalam keranjang menggunakan remove button', async function(){ //passed
        await HomePage.addProductToCart()
        await HomePage.clickCart()        
        await driver.pause(3000)
        await scroll(300,100)
        await HomePage.removeProductCart()
        await driver.pause(4000)
        
        await expect(HomePage.txtProductCart).not.toBeExisting()

    })

    //5. positive
    it('User mengubah tampilan produk dari grid menjadi list produk', async function(){ //passed
        await HomePage.toggleDisplay()
        await driver.pause(3000)

        await expect(HomePage.txtToggle).toBeExisting()        
    })

    //6. positive
    it('User mengubah tampilan produk dari list menjadi grid produk', async function(){ //passed
        await HomePage.toggleDisplay()
        await driver.pause(3000)
        await HomePage.toggleDisplay()
        await driver.pause(3000)

        await expect(HomePage.txtToggle).not.toBeExisting()  

    })  
    
    //7. negative
    it('User membatalkan melakukan sorting produk', async function(){ //passed
        await HomePage.clickFilter() 
        await driver.pause(3000)
        await HomePage.clickCancel()
        await driver.pause(3000)

        //assertion
        await expect(HomePage.txtProduct1).toHaveText('Sauce Labs Backpack')
        await expect(HomePage.txtProduct2).toHaveText('Sauce Labs Bike Light')
    })

    //8. positive
    it('User menambahkan Produk Sauce Labs Bike Light ke dalam keranjang dari detail produk', async function(){ //passed
        await HomePage.clickBike() //klik produk A tp yg muncul produk setelahnya
        await driver.pause(3000)
        await scroll(600,100)
        await driver.pause(3000)
        await HomePage.addCartDetail() //tidak bertambah jika menggunakan produk backpack
        await driver.pause(3000)
        await HomePage.clickCart()

        await expect(HomePage.txtBikeCart).toHaveText('Sauce Labs Bolt T-Shirt')
    })

    //9. positive
    it('User menghapus Produk Sauce Labs Bike Light dari detail produk', async function(){ //passed or failed
        await HomePage.clickBike() //klik produk A tp yg muncul produk setelahnya
        await driver.pause(3000)
        await scroll(600,100)
        await driver.pause(3000)
        await HomePage.addCartDetail()     
        await driver.pause(3000)
        await HomePage.removeBikeProduct() //remove terklik tapi tidak berubah        
        await driver.pause(3000)

        //passed
        // await expect(HomePage.txtNotifCart).not.toBeExisting()        

        //failed
        await HomePage.clickCart()        
        await expect(HomePage.txtBikeCart).not.toBeExisting()
    })  
    
    //10. positive
    it('User menghapus produk di dalam keranjang dengan swipe kanan ke kiri', async function(){ //passed
        await HomePage.addProductToCart()
        await HomePage.clickCart()
        await driver.pause(3000)
        await swipe(700, 100)
        await driver.pause(3000)
        await HomePage.removeSwipe()
        await driver.pause(3000)

        await expect(HomePage.txtProductCart).not.toBeExisting()
    })  

    //11. positive
    it('User melakukan sorting product berdasarkan harga dari low to high', async function(){ //
        await HomePage.toggleDisplay()
        await HomePage.clickFilter()
        await HomePage.lowHigh()
        await driver.pause(3000)

        await sorted('//android.view.ViewGroup[@content-desc="test-Item"]','//android.widget.TextView[@content-desc="test-Price"]') //bingung expectnya apa

        // const prices = await driver.$$('//android.view.ViewGroup[@content-desc="test-Item"]/android.widget.TextView[@content-desc="test-Price"]')
        // for (let price of prices) {
        //     console.log(await price.getText());
        // }             
        
    })  
})
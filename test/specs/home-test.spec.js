import {driver} from '@wdio/globals'
import HomePage from '../pageobjects/home-page.page.js'
import scroll from '../handlers/scroll.js'

describe.skip('<<<<<<<<<< HOMEPAGE TESTING >>>>>>>>>>', function(){
    it('User mengecek Produk Sauce Labs Backpack', async function(){ //error
        await HomePage.checkBackpack()
        await driver.pause(3000) 
        await scroll(400, 200)
        await driver.pause(3000) 
        // await scroll(300, 500)
        
        console.log(HomePage.txtBackpack.getText())
        await expect(HomePage.txtBackpack).toHaveText('Sauce Labs Backpack')
    })

    it('User menambahkan Produk Sauce Labs Backpack ke dalam keranjang', async function(){
        await HomePage.addProductToCart()
        
        await expect(HomePage.txtCart).toHaveText(HomePage.titleBackpack)
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
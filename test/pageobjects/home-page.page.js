class HomePage {   
    get addToCart (){ return $('(//*[@content-desc="test-ADD TO CART"])[1]')}
    get cart (){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')}
    get txtCart (){ return $('//*[@content-desc="test-Description"]/android.widget.TextView[@text="Sauce Labs Backpack"]')}
    
    get removeHomepage (){ return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]')}
    get txtNotifCart (){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView[@text=""]')}
    
    get txtDetailProduct (){ return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView')}

    get filter (){ return $('~test-Modal Selector Button')}
    get cancel (){ return $('//android.widget.TextView[@text="Cancel"]')}
    get txtProduct1 (){ return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]')}
    get txtProduct2 (){ return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Bike Light"]')}
    
    get removeCart (){ return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]')}
    get txtProductCart (){ return $('//android.view.ViewGroup[@content-desc="test-Description"]')}

    get saucelabsBike (){ return $('(//android.view.ViewGroup[@content-desc="test-Item"])[2]/android.view.ViewGroup/android.widget.ImageView')}
    get cartDetailProduct (){ return $('~test-ADD TO CART')}
    get txtBikeCart (){ return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[@text="Sauce Labs Bolt T-Shirt"]')}
    
    get removeDetail (){ return $('~test-REMOVE')}

    get deleteSwipe (){ return $('~test-Delete')}   
    
    get toggle (){ return $('//android.view.ViewGroup[@content-desc="test-Toggle"]/android.widget.ImageView')}
    get txtToggle (){ return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.widget.TextView')}

    get lowToHigh (){ return $('//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView')}
    get txtPrice (){ return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.widget.TextView[@content-desc="test-Price" and @text="$7.99"]')}

    get coba (){return $$('(//android.view.ViewGroup[@content-desc="test-Item"])/android.widget.TextView[@content-desc="test-Price"]')}


    async addProductToCart(){
        await this.addToCart.click()  
    }

    async clickCart(){
        await this.cart.click()
    }

    async removeProductHomepage(){
        await this.removeHomepage.click()
    }

    async clickFilter(){
        await this.filter.click()
    }

    async clickCancel(){
        await this.cancel.click()
    }

    async removeProductCart(){
        await this.removeCart.click()
    }

    async clickBike(){
        await this.saucelabsBike.click()        
    }

    async addCartDetail(){
        await this.cartDetailProduct.click()
    }

    async removeBikeProduct(){
        await this.removeDetail.click()
    }

    async removeSwipe(){
        await this.deleteSwipe.click()
    }
    
    async toggleDisplay(){
        await this.toggle.click()
    }
    
    async lowHigh(){
        await this.lowToHigh.click()
    }
    
}

export default new HomePage()
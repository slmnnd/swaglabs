class homepage {
    get backpackProduct (){ return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.ImageView')}
    //?? vv
    get titleBackpack (){ return $('(//android.view.ViewGroup[@content-desc="test-Item"])[1]/android.view.ViewGroup/android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]')}
    get txtBackpack (){ return $('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[@text="Sauce Labs Backpack"]')}
    
    get addToCart (){ return $('(//*[@content-desc="test-ADD TO CART"])[1]')}
    get cart (){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')}
    get txtCart (){ return $('//*[@content-desc="test-Description"]/android.widget.TextView[@text="Sauce Labs Backpack"]')}
    
    get b (){ return $('')}
    get b (){ return $('')}



    async checkBackpack(){
        await this.backpackProduct.click()        
    }

    async addProductToCart(){
        await this.addToCart.click()
        await this.cart.click()

    }
}

export default new homepage()
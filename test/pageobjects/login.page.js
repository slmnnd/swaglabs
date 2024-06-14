// import {$} from '@wdio/globals'

class login {

    //locators
    get username (){ return $('~test-Username')}
    get password (){ return $('~test-Password')}
    get loginBtn (){ return $('~test-LOGIN')}
    get errorMsg (){ return $('//*[@content-desc="test-Error message"]/android.widget.TextView')}
    get errorUname (){ return $('//*[@content-desc="test-Error message"]/android.widget.TextView[@text="Username is required"]')}
    get errorPass (){ return $('//*[@content-desc="test-Error message"]/android.widget.TextView[@text="Password is required"]')}
    get txtHomepage (){ return $('//*[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView[@text="PRODUCTS"]')}
    

    //actions
    async loginInput (uname, pass){
        await this.username.setValue(uname)
        await this.password.setValue(pass)        
    }

    // async usernameInput(uname){
    //     await this.username.setValue(uname)
    // }

    // async passwordInput(pass){
    //     await this.password.setValue(pass)  
    // }

    // async nullUsername (){
    //     await this.username.clearValue()
    // }

    // async nullPassword (){
    //     await this.password.clearValue()
    // }

    async clickLoginBtn(){
        await this.loginBtn.click()
    }
}

export default new login()

async function sorted(parent, child) {
    let returnElements = [];
    
    const priceElements = await $$(parent);
    console.log('panjang test-item = ',priceElements.length-1)
    for (let i = 0; i < priceElements.length-1; i++) {
        const priceText = await priceElements[i].$(child).getText(); 
        console.log(priceText)
        returnElements.push(priceText); 
    }

    return returnElements;
};

export default sorted
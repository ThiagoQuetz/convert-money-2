const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConvertd = document.querySelector(".currency-value") //Outras moedas
    

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.35
    const bitcoinToday = 301583.14
    
    if(currencySelect.value == "dolar"){ //Se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
        
    }

    if(currencySelect.value == "euro"){
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", { //Se o select estiver selecionado o valor de euro, entre aqui
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "libra"){ //Se o select estiver selecionado o valor de libra, entra aqui
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
        
    }

    if(currencySelect.value == "bitcoin"){ //Se o select estiver selecionado o valor de bitcoin, entra aqui
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
        
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)      

}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dollar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
  
    
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues )
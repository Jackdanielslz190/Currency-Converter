const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") 

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //Valor Digitado
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") //Valor em Dolar
    
    
    const dolarToday = 5 //Cotação Dolar
    const euroToday = 5.4 //Cotação Euro
    const libraToday = 6.3


    if(currencySelect.value == "dolar"){ //se o select estiver selecionado dolar, vem aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ //se o select estiver selecionado euro, vem aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){ //se o select estiver selecionado euro, vem aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./Assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./Assets/euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./Assets/libra.png"

    }





    convertValues()

}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
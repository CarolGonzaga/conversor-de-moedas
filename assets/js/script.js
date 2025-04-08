// Cotação de Moedas do dia (08/04/2025)
const USD = 5.993;
const EUR = 6.537;
const GBP = 7.639;

// Símbolo das Moedas
const USD_Symbol = "$";
const EUR_Symbol = "€";
const GBP_Symbol = "£";

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");
const price = document.querySelector("#price");
const currSymbol = document.getElementById("currency-symbol");

// Manipulando o input 'amount' para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD);
      break;

    case "EUR":
      convertCurrency(amount.value, EUR);
      break;

    case "GBP":
      convertCurrency(amount.value, GBP);
      break;

    default:
      break;
  }
};

currency.onchange = () => {
  switch (currency.value) {
    case "USD":
      showCurrencyValue(USD, "USD", USD_Symbol);
      break;

    case "EUR":
      showCurrencyValue(EUR, "EUR", EUR_Symbol);
      break;

    case "GBP":
      showCurrencyValue(GBP, "GBP", GBP_Symbol);
      break;

    default:
      break;
  }
};

// Função para converter a moeda
function convertCurrency(amount, price) {
  try {
    // Calcula o total
    let total = amount * price;
    result.textContent = `${formatCurrencyBRL(total).replace("R$", "")}`;

    // Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe que exibe o footer com o resultado
    footer.classList.remove("show-result");

    alert("Erro: Não foi possível converter. Tente novamente!");
    console.log(error);
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function showCurrencyValue(value, local, symbol) {
  price.classList.add("show-result");
  currSymbol.textContent = `${symbol}`;
  price.textContent = `1 ${local} = ${value} ${symbol}`;
}

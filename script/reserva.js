const buttonServices = document.querySelector(".btn-add-servicos");
const servicesContent = document.querySelector(".add-servicos-content");
const buttonModal = document.querySelector(".btn");
const modal = document.querySelector(".modal-wrapper");

buttonModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
    console.log(e.target);
    const className = ["modal-wrapper", "close-button"];
    const classNameOfClickedElement = e.target.classList[0];
    const shouldClose = className.some(
        (className) => className === classNameOfClickedElement
    );
    if (shouldClose) {
        modal.style.display = "none";
    }
});

const showItens = (e) => {
    e.preventDefault();
    servicesContent.classList.toggle("hide");
};

buttonServices.addEventListener("click", showItens);

// function carrinhoReserva(dataChichin, dataCheckout, qtdAdulto, qdtCrianca) {

// }

const carrinhoReserva = {
    dataCheckin: "",
    dataCheckout: "",
    qtdAdulto: 0,
    qtdCrianca: 0,
    subtotal: 0,
    total: 0,
    adcionais: [],
};
const selecionar = (seletor) => document.querySelector(seletor);

// const teste = selecionar('[data-checkin]').addEventListener('onfocusout', imprimi)

// carrinhoReserva.dataCheckin = selecionar("[data-checkin]").value
// console.log(selecionar("[data-checkin]").value);
// console.log(carrinhoReserva);

let data_set = ['data-checkout', 'data-checkin', 'data-qdtA', 'data-qdtC']

function recuperaData(){
    // console.log(selecionar("[data-checkin]"));
    // console.log(selecionar("[data-checkin]").value);
    let dataCheckin, dataCheckout, dataQdtA, dataQdtC
    dataCheckin = selecionar("[data-checkin]").value
    dataCheckout = selecionar("[data-checkout]").value
    // dataQdtA = selecionar(`[${data_set[3]}]`).value
    dataQdtA = selecionar('[data-qdtA]').value
    // console.log(typeof((parseInt(dataQdtA))))
    // console.log(parseInt(dataQdtA) > 0)
    dataQdtC = selecionar(`[${data_set[3]}]`).value
    console.log(dataQdtC)
    if( dataCheckin !== ''){
        carrinhoReserva.dataCheckin = dataCheckin
    }
    if(dataCheckout !== ''){
        carrinhoReserva.dataCheckout = dataCheckout
    }
    if(parseInt(dataQdtA) > 0){
        carrinhoReserva.qtdAdulto = parseInt(dataQdtA)
    }
    if(parseInt(dataQdtC) > 0){
        carrinhoReserva.qtdCrianca = parseInt(dataQdtC)
    }
    
    mostrar()
}
data_set.forEach( (item) =>{
    let cli = selecionar(`[${item}]`)
    cli.addEventListener('focusout', recuperaData)
})

function salvarCarrinho(){
    
}
function mostrar(){
    console.log(carrinhoReserva)
}

let acomodacao = document.querySelectorAll('.container-titulos-acomodacao')
console.log('Objeto: ',acomodacao)

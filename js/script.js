// Dupla: Rafael Eliú e Lucas Miller
var txtInput = document.querySelector('input')
var list = document.querySelector('ol')
var time = document.querySelector('time')
var btnButton = document.querySelector('button')
var body = document.querySelector('body')
var thingslist = []

const renderList = () => {
    list.innerHTML = ``
    thingslist.forEach((itemList, posicao) => { // A variável itemList contém o texto de cada coisa da lista
        let lista = document.createElement('li')
        let textoLista = document.createTextNode(itemList) // Texto da li
        lista.appendChild(textoLista)

        let createButtonElement = document.createElement('button')
        posicao = thingslist.indexOf(itemList)
        createButtonElement.setAttribute('onclick', `deleteItemsList(${posicao})`) // posição que o usuario escolheu pra excluir
        let createButtonText = document.createTextNode('Excluir')
        createButtonElement.appendChild(createButtonText)
        lista.appendChild(createButtonElement)


        list.appendChild(lista)
    }) 
}
renderList()


const addElements = () => {
    if(txtInput.value.length == 0) {
        console.warn(`Erro! Caixa de texto vazia!`)
        alert('Não deixe a caixa de texto vazia!')
    }else{
        thingslist.push(txtInput.value)
        renderList()
    }
    txtInput.value = ''
}
btnButton.onclick = addElements

const deleteItemsList = (pos) => {
    thingslist.splice(pos, 1) // Remove uma quantidade de elemento que for passado
    renderList()
}

const setDateHours = () => {
    let date = new Date()

    let days_of_the_week = [
        'Domindo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    
    let months_year = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'julho',
        'Agosto',
        'Setembro',
        'Outubro', 
        'Novembro', 
        'Dezembro'
    ]

    
    let day = date.getDate()
    let year = date.getFullYear()
    let hours = date.getHours()
    
    
    if(hours >= 0 && hours < 5) {
        time.innerHTML = `${days_of_the_week[date.getDay()]}, ${day} de ${months_year[date.getMonth()]} de ${year}. Boa madrugada!`
    }else if(hours >= 5 && hours < 12) {
        time.innerHTML = `${days_of_the_week[date.getDay()]}, ${day} de ${months_year[date.getMonth()]} de ${year}. Bom dia!`
    }else if(hours >= 12 && hours < 18) {
        time.innerHTML = `${days_of_the_week[date.getDay()]}, ${day} de ${months_year[date.getMonth()]} de ${year}. Boa tarde!`
    }else{
        time.innerHTML = `${days_of_the_week[date.getDay()]}, ${day} de ${months_year[date.getMonth()]} de ${year}. Boa noite!`
    }
}

body.onload = setDateHours
const buttonAddItem = document.querySelector('.main-input-add-item button')
const table = document.getElementById('table-items')
const buttonDeleteAll = document.querySelector('.main-button-delete button')
const main = document.querySelector('.main-container')
const modal = document.querySelector('.modal')
const buttonSaveItem = document.getElementById('saveNewItem')
let itemList = document.getElementById('inpItem')
let oldItem

function addItem() {
    let textItem = itemList.value
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    let tdText = document.createElement('td')
    let tdEdit = document.createElement('td')
    let tdDelete = document.createElement('td')
    let buttonEdit = document.createElement('button')
    let imgEdit = document.createElement('img')
    let buttonDelete = document.createElement('button')
    let imgDelete = document.createElement('img')

    imgEdit.setAttribute('src', 'src/image/edit.svg')
    imgDelete.setAttribute('src', 'src/image/delete.svg')
    buttonEdit.appendChild(imgEdit)
    buttonDelete.appendChild(imgDelete)
    buttonEdit.addEventListener('click', editItem)
    buttonDelete.addEventListener('click', deleteItem)
    tdEdit.appendChild(buttonEdit)
    tdDelete.appendChild(buttonDelete)
    tdText.innerText = textItem
    tdEdit.setAttribute('id', 'tdEdit')
    tdText.setAttribute('id', 'tdText')
    tdDelete.setAttribute('id', 'tdDelete')
    tr.appendChild(tdText)
    tr.appendChild(tdEdit)
    tr.appendChild(tdDelete)
    tbody.appendChild(tr)
    table.append(tbody)
    itemList.value = ""
}

buttonAddItem.addEventListener('click', addItem)

function editItem(ev) {
    main.style.display = 'none'
    modal.style.display = 'flex'
    oldItem = ev.currentTarget.parentNode.parentNode.children[0]
    return oldItem
}

function saveItem() {
    let inputNewItem = document.getElementById('inpEditItem').value
    if (inputNewItem == "") {
        alert("O campo deve ser preenchido")
        return
    }
    oldItem.textContent = inputNewItem
    main.style.display = 'flex'
    modal.style.display = 'none'
    document.getElementById('inpEditItem').value = ""
}

buttonSaveItem.addEventListener('click', saveItem)



function deleteItem(ev) {
    let elemento = ev.target.parentNode.parentNode.parentNode
    elemento.remove()
}

function deleteAllItems() {
    const rows = Array.from(document.getElementsByTagName('tr'))

    for (let i = 0; i < rows.length; i++) {
        let arrRowsData = Array.from(rows[i].children)
        for (let j = 0; j < arrRowsData.length; j++) {
            arrRowsData[j].remove()
        }
    }
}

buttonDeleteAll.addEventListener('click', deleteAllItems)




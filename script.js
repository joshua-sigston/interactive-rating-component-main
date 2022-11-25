const selectionBtn = document.querySelectorAll('#selection-btn')
const btn = document.getElementById('btn')
const cardContainer = document.getElementById('card-container')
const thankYou = document.getElementById('thank-you-state')
const selection = document.getElementById('selection')

function disableButton() {
    selectionBtn.forEach( btn => {
        if(btn.classList.contains('btn_background')) {
            btn.classList.remove('btn_hover')
            btn.disabled = true
        }
    })
}

function displaySelection() {
    selectionBtn.forEach((element) => {
        element.addEventListener('click', () => {
            selection.textContent = element.textContent
            element.classList.add('btn_clicked')
            element.classList.remove('btn_background')
            disableButton()
        })
    });
}

btn.addEventListener('click', () => {
    cardContainer.classList.add('inactive')
    thankYou.classList.remove('inactive')
})

displaySelection()

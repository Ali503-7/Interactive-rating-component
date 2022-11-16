let form = document.getElementsByTagName("form")[0]
let label = document.querySelectorAll('label')
let radio = document.querySelectorAll('[type="radio"]')
let submit = document.querySelector('[type="submit"]')
let selected = document.querySelector('.selected')
let bacf = document.querySelector('.back')
console.log(bacf)

function addChecked(e) {
  for (let i = 0; i < radio.length; i++) {
    radio[i].removeAttribute("Checked")
  }
}

form.addEventListener("click", (e) => {
  addChecked()


  if (e.target.hasAttribute('one')) {
    radio[0].setAttribute("Checked", '')
    return num  = radio[0].value
  }else if (e.target.hasAttribute('two')){
    radio[1].setAttribute("Checked", '')
    return num =  radio[1].value
  }else if (e.target.hasAttribute('three')){
    radio[2].setAttribute("Checked", '')
    return num =  radio[2].value
  }else if (e.target.hasAttribute('four')){
    radio[3].setAttribute("Checked", '')
    return num =  radio[3].value
  }else if (e.target.hasAttribute('five')){
    radio[4].setAttribute("Checked", '')
    return num = radio[4].value;
  }
  
  let selec = document.createElement('p')
  let selecT = document.createTextNode(`You Selected ${num} out of 5`)
  selec.appendChild(selecT)
  selected.appendChild(selec)
})


submit.addEventListener('click', () => {
  bacf.classList.add('nani')
})
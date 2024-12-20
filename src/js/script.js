const clear = document.querySelector('.mortgage__header__clear')
const amountInput = document.querySelector('#amount')
const termInput = document.querySelector('#term')
const rateInput = document.querySelector('#rate')
const typeInput1 = document.querySelector('#type1')
const typeInput2 = document.querySelector('#type2')
const submit = document.querySelector('#submit')
const typeError = document.querySelector('.type-error')
const errors = document.querySelectorAll('.mortgage__form__box__input-box__decorator')
const beforeResult = document.querySelector('.result__before-box')
const afterResult = document.querySelector('.result__after-box')

const resultMain = document.querySelector('.result-main')
const resultSecondary = document.querySelector('.result-secondary')

errorsCount = 0
const clearInputs = () => {
	amountInput.value = ''
	termInput.value = ''
	rateInput.value = ''
	typeInput1.checked = false
	typeInput2.checked = false
	typeError.style.visibility = 'hidden'
	errors.forEach(error => {
		error.style.backgroundColor = 'hsl(202, 86%, 94%)'
	})
	beforeResult.classList.add('active')
	afterResult.classList.remove('active')
}

const handleError = () => {
	errorsCount = 0
	if (amountInput.value == '') {
		errors[0].style.backgroundColor = 'red'
		errorsCount++
	} else {
		errors[0].style.backgroundColor = 'hsl(202, 86%, 94%)'
	}
	if (termInput.value == '') {
		errors[1].style.backgroundColor = 'red'
		errorsCount++
	} else {
		errors[1].style.backgroundColor = 'hsl(202, 86%, 94%)'
	}
	if (rateInput.value == '') {
		errors[2].style.backgroundColor = 'red'
		errorsCount++
	} else {
		errors[2].style.backgroundColor = 'hsl(202, 86%, 94%)'
	}
	if (!typeInput1.checked && !typeInput2.checked) {
		typeError.style.visibility = 'visible'
		errorsCount++
	} else {
		typeError.style.visibility = 'hidden'
	}
}
const handleSubmit = () => {
	p = amountInput.value
	r = rateInput.value / 100
	n = termInput.value * 12
	m = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1))
	resultMain.textContent = '$' + m.toFixed(2)

    res2 = m*n
    resultSecondary.textContent = '$'+res2.toFixed(2)

	afterResult.classList.add('active')
	beforeResult.classList.remove('active')
}

clear.addEventListener('click', clearInputs)
submit.addEventListener('click', e => {
	e.preventDefault()
	handleError()
	console.log(errorsCount)
	if (errorsCount == 0) {
		handleSubmit()
	}
})

// zrobic ze na klikniecie przycisku clear wyczyszcza sie kazdy input na stronie

// gdy jakies pole nie jest wypelnione, jego dekorator robi sie czerwony, potem gdy uzytkownik wypelni i znowu kliknie submit to sie zmieni kolor na normalny.

// gdy wszystkie pola zostana wypelnione to po kliknieciu submit znika result.before i pojawia sie result.after.
//  w polach w result.after obliczane jest to co uzytkownik da w inputkah

// dobranoc skurwysyny (1:20)

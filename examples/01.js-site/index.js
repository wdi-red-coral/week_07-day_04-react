// const displaycoffees = function () {
//     // const coffeeData = {
//     //   imageUrl: 'https://www.coffeebeanery.com/img/product/Amaretto.jpg?fv=D1D76216307E1063DAC9F99ED5849BC2-11643',
//     //   name: 'Santilla',
//     //   abv: '6.0%',
//     //   review: 'This coffee tastes like Pine, Orange Zest, Crisp.  I thought it was delicious.'
//     // }
//
//     // const coffeeProfileInnerHTML =
//     //     '<img src="https://www.coffeebeanery.com/img/product/Amaretto.jpg?fv=D1D76216307E1063DAC9F99ED5849BC2-11643" alt="">' +
//     //     '<h3>Santilla</h3>' +
//     //     '<p>6.0%</p>' +
//     //     '<p>This coffee tastes like Pine, Orange Zest, Crisp.  I thought it was delicious.</p>'
//
//     // const coffeeProfileInnerHTML =
//     //     '<img src="' + coffeeData.imageUrl + '" alt="">' +
//     //     '<h3>' + coffeeData.name + '</h3>' +
//     //     '<p>' + coffeeData.abv + '</p>' +
//     //     '<p>' + coffeeData.review + '</p>'
//     //
//     // for (let i = 0; i < 6; i++) {
//     //   const coffeeProfileHTML = document.createElement('div')
//     //   coffeeProfileHTML.className = 'coffee-profile'
//     //   coffeeProfileHTML.innerHTML = coffeeProfileInnerHTML
//     //   document.querySelector('#coffee-profiles-container').append(coffeeProfileHTML)
//     // }
// }

const displayReview = function (coffeeData) {
  const coffeeProfileInnerHTML =
    '<img src="' + coffeeData.imageUrl + '" alt="">' +
    '<h3>' + coffeeData.name + '</h3>' +
    '<p>' + coffeeData.abv + '</p>' +
    '<p>' + coffeeData.review + '</p>'

  const coffeeProfileHTML = document.createElement('div')
  coffeeProfileHTML.className = 'coffee-profile'
  coffeeProfileHTML.innerHTML = coffeeProfileInnerHTML
  document.querySelector('#coffee-profiles-container').append(coffeeProfileHTML)
}

const saveReview = function (newcoffee) {
  // Save coffees
  if (window.localStorage.getItem('coffees')) {
    const coffees = JSON.parse(window.localStorage.getItem('coffees'))
    coffees.push(newcoffee)
    localStorage.setItem('coffees', JSON.stringify(coffees))

  // Save first coffee
  } else {
    const coffees = [newcoffee]
    localStorage.setItem('coffees', JSON.stringify(coffees))
  }
}

const reviewcoffee = function (event) {
  event.preventDefault()

  // get inputs from user to create coffee object
  const formInputs = document.querySelectorAll('#coffee-review-form input')
  const formTextArea = document.querySelectorAll('#coffee-review-form textarea')
  const newcoffee = {
    name: formInputs[0].value,
    abv: formInputs[1].value,
    imageUrl: formInputs[2].value,
    review: formTextArea[0].value
  }

  // save coffee
  saveReview(newcoffee)

  // display coffee
  displayReview(newcoffee)

  // reset form
  event.target.reset()
}

const displayReviews = function () {
  // Display coffees from local storage
  const coffeesString = window.localStorage.getItem('coffees')
  if (coffeesString) {
    const coffees = JSON.parse(coffeesString)
    coffees.forEach(function(coffee){
      displayReview(coffee)
    })
  }
}

const deleteReviews = function () {
  localStorage.setItem('coffees', '')
  document.querySelector('#coffee-profiles-container').innerHTML = ''
}

window.onload = function () {

  // display coffees
  displayReviews()

  // set up form
  document.querySelector('#coffee-review-form').onsubmit = reviewcoffee
  document.querySelector('#clear-reviews').onclick = deleteReviews
}

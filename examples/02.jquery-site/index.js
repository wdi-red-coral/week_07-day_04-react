const displayReview = function (coffeeData) {
  const coffeeProfileHTML =
    '<div class="coffee-profile">' +
      '<img src="' + coffeeData.imageUrl + '" alt="">' +
      '<h3>' + coffeeData.name + '</h3>' +
      '<p>' + coffeeData.abv + '</p>' +
      '<p>' + coffeeData.review + '</p>' +
    '</div>'

  $('#coffee-profiles-container').append(coffeeProfileHTML)
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
  const formInputs = $('#coffee-review-form input')
  const formTextArea = $('#coffee-review-form textarea')
  const newcoffee = {
    name: $(formInputs[0]).val(),
    abv: $(formInputs[1]).val(),
    imageUrl: $(formInputs[2]).val(),
    review: $(formTextArea[0]).val()
  }

  // save coffee
  saveReview(newcoffee)

  // display coffee
  displayReview(newcoffee)

  // reset form
  $(event.target)[0].reset()
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
  $('#coffee-profiles-container').html('')
}

$(function () {

  // display coffees
  displayReviews()

  // set up form
  $('#coffee-review-form').on('submit', reviewcoffee)
  $('#clear-reviews').on('click', deleteReviews)
})

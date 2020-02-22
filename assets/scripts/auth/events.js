'use strict'

// create function and export with module.exports and move to app.js
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const app = require('./../app')
// #B this function was called (from app.js). it is an event and its transforming
// data from what a user typed into the browser, through the form(html),
// through the event handler(app.js), to here(event.js)
// clickCell is a variable that is storing a function
const clickCell = function (event) {
  event.preventDefault()
  // creating a piece of data that is a variable (called form)
  // and that data is taking in the event (the parameter) and applying
  // the function (target), the target is the form (submit button in this case)
  // being clicked
  // the (form) is the input. the getFormFields is the function that is taking in
  // the (form) input, the output of that function is the const data
  // creating a piece of data that is a variable (called data)
}

// #D this function was called (from app.js). it is an event and its transforming
// data from what a user typed into the browser, through the form(html),
// through the event handler(app.js), to here(event.js)

const onSignUp = function (event) {
  event.preventDefault()
  // for element that was submitted
  const form = event.target
  // get values from the users input in my form
  // format data correctly for api
  const data = getFormFields(form)
  // console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  // taking in sign in form from app.js
  event.preventDefault()
  // prevents refresh of page
  const form = event.target
  // form is set to form object(form located index.html)
  // from form ( in index.html) listener (app.js) listens
  // for 'submit', if that happens, calls for sign in
  const data = getFormFields(form)
  // gets data from form sign in (located in index.html)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  clickCell,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

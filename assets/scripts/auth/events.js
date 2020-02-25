'use strict'

// create function and export with module.exports and move to app.js
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const clickCell = function (event) {
  event.preventDefault()
}

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

const onShow = function (event) {
  event.preventDefault()
  api.showCharacter()
    .then(ui.onShowCharacterSuccess)
    .catch(ui.onShowCharacterFailure)
}

const onCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createCharacter(data)
    .then(ui.onCreateCharacterSuccess)
    .catch(ui.onCreateCharacterFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  api.updateCharacter()
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onUpdateCharacterFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteCharacter(id)
    .then(function () {
      onShowCharacter(event)
    })
    .catch(ui.failure)
}

const onClear = function (event) {
  event.preventDefault()
  ui.clearCharacterSuccess()
  // .then(ui.onClearCharacters)
  // .catch(ui.onClearCharactersFailure)
}

const addHandlers = () => {
  $('#getCharactersButton').on('click', onShow)
  $('#clearCharactersButton').on('click', onClear)
  $('.content').on('click', '.remove-character', onDelete)
}

module.exports = {
  clickCell,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreate,
  onUpdate,
  onShow,
  onDelete,
  onClear,
  addHandlers
}

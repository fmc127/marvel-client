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
  const data = getFormFields(event.target)
  api.updateCharacter(data)
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onUpdateCharacterFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  // const id = $(event.target).data('id')
  api.deleteCharacter(event)
    .then(ui.onDeleteCharacterSuccess)
    .catch(ui.onDeleteCharacterFailure)
}

const onClear = function (event) {
  event.preventDefault()
  ui.clearCharacterSuccess()
  ui.clearVehicleSuccess()
  // .then(ui.onClearCharacters)
  // .catch(ui.onClearCharactersFailure)
}

const onShowV = function (event) {
  event.preventDefault()
  api.showVehicle()
    .then(ui.onShowVehicleSuccess)
    .catch(ui.onShowVehicleFailure)
}

const onCreateV = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createVehicle(data)
    .then(ui.onCreateVehicleSuccess)
    .catch(ui.onCreateVehicleFailure)
}

const onUpdateV = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateVehicle(data)
    .then(ui.onUpdateVehicleSuccess)
    .catch(ui.onUpdateVehicleFailure)
}

const onDeleteV = function (event) {
  event.preventDefault()
  api.deleteVehicle(event)
    .then(ui.onDeleteVehicleSuccess)
    .catch(ui.onDeleteVehicleFailure)
}

const onClearV = function (event) {
  event.preventDefault()
  ui.clearVehicleSuccess()
  // .then(ui.onClearVehicleSuccess)
  // .catch(ui.onClearVehicleFailure)
}

const addHandlers = () => {
  $('#getCharactersButton').on('click', onShow)
  $('#clearCharactersButton').on('click', onClear)
  $('.all-characters').on('click', '.remove-character', onDelete)
  $('#getVehiclesButton').on('click', onShowV)
  $('#clearVehiclesButton').on('click', onClearV)
  $('.all-vehicles').on('click', '.remove-vehicle', onDeleteV)
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
  addHandlers,
  onShowV,
  onClearV,
  onDeleteV,
  onUpdateV,
  onCreateV
}

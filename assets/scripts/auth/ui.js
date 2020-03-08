'use strict'

const store = require('./../store')
// const events = require('./events')
const showCharactersTemplate = require('../templates/character-listing.handlebars')
const showVehiclesTemplate = require('../templates/vehicle-listing.handlebars')

const api = require('./api')

const onSignUpSuccess = function (response) {
  $('#message').html(response.user.email + ' Successfully signed up')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#sign-in').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' Successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#search-character').show()
  $('#create-character').show()
  $('#update-character').show()
  $('#delete-character').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
  $('#showCharactersButton').show()
  $('#create-vehicle').show()
  $('#update-vehicle').show()
  $('#showVehiclesButton').show()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Successfully changed password')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Successfully signed out!')
  $('#search-character').hide()
  $('#create-character').hide()
  $('#update-character').hide()
  $('#delete-character').hide()
  $('#change-password').hide()
  $('#change-password').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-up').trigger('reset')
  $('#showCharactersButton').hide()
  $('#clearCharactersButton').hide()
  $('.all-characters').html('')
  $('#create-character').trigger('reset')
  $('#update-character').trigger('reset')
  $('#create-vehicle').hide()
  $('#update-vehicle').hide()
  $('#showVehiclesButton').hide()
  $('#clearVehiclesButton').hide()
  $('.all-vehicles').empty()

  store.user = null
  // store.user = response.user
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign out failed')
  $('#sign-out').trigger('reset')
}

const onShowCharacterSuccess = function (data) {
  $('#showCharactersButton').hide()
  $('#clearCharactersButton').show()
  // if (store.updateCharacter === false) {
  $('#message').text('Behold!')
  // store.updateCharacter = false
  // $('#message').text('Behold!')
  $('#show-character').trigger('reset')
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('.all-characters').html('')
  $('.all-characters').append(showCharactersHtml)
}

const onReShowCharacters = function (data, message) {
  // $('#showCharactersButton').hide()
  // $('#clearCharactersButton').show()
  $('#message').text(message)
  store.updateCharacter = false
  // $('#message').text('Behold!')
  $('#show-character').trigger('reset')
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('.all-characters').html('')
  $('.all-characters').append(showCharactersHtml)
}

const onShowCharacterFailure = function (response) {
  $('#message').text('Could not locate hero')
  $('#show-character').trigger('reset')
}

const onCreateCharacterSuccess = function (response) {
  // $('#message').text('Hero created!')
  $('#create-character').trigger('reset')
  api.showCharacter()
    .then((data) => {
      onReShowCharacters(data, 'Hero created!')
    })
    .catch(onShowCharacterFailure)
  // console.log('success')
}

const onCreateCharacterFailure = function (response) {
  $('#message').text('Failed to create hero')
  $('#create-character').trigger('reset')
  // console.log('failure')
}

const onUpdateCharacterSuccess = function (data) {
  // $('#message').text('Your hero has been updated!')
  $('#update-character').trigger('reset')
  // $('#message').show()
  $('.all-characters').trigger('reset')
  $('#create-character').trigger('reset')
  store.updateCharacter = true
  api.showCharacter()
    .then((data) => {
      onReShowCharacters(data, 'Your hero has been updated!')
    })
    .catch(onShowCharacterFailure)
}

const onUpdateCharacterFailure = function (response) {
  $('#message').text('Failed to update hero')
  $('#update-character').trigger('reset')
}

const onDeleteCharacterSuccess = function (response) {
  // $('#message').text('Deleted hero!')
  $('#remove-character').trigger('reset')
  api.showCharacter()
    .then((data) => {
      onReShowCharacters(data, 'Deleted Hero!')
    })
    .catch(onShowCharacterFailure)
}

const onDeleteCharacterFailure = function (response) {
  $('#message').text('Failed to delete hero!')
  $('#remove-character').trigger('reset')
}

const getCharactersSuccess = (data) => {
  // console.log(data)
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('#message').text('Behold!')
  $('.content').html(showCharactersHtml)
}

const clearCharacterSuccess = () => {
  $('#message').text('Cleared Heros!')
  $('.all-characters').empty()
  $('#showCharactersButton').show()
  $('#clearCharactersButton').hide()
}

const clearCharacterFailure = (error) => {
  $('#message').text('We aint goin nowhere!')
  console.error(error)
}

const onShowVehicleSuccess = function (data) {
  $('#showVehiclesButton').hide()
  $('#clearVehiclesButton').show()
  // if (store.updatevehicle === false) {
  $('#message').text('Vehicles! HUZZAH!')

  $('#show-vehicle').trigger('reset')
  const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
  $('.all-vehicles').html('')
  $('.all-vehicles').append(showVehiclesHtml)
}

const onReShowVehicles = function (data, message) {
  // $('#showVehiclesButton').hide()
  // $('#clearVehiclesButton').show()
  $('#message').text(message)
  store.updateVehicle = false
  // $('#message').text('Behold!')
  $('#show-vehicle').trigger('reset')
  const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
  $('.all-vehicles').html('')
  $('.all-vehicles').append(showVehiclesHtml)
}

const onShowVehicleFailure = function (response) {
  $('#message').text('Could not locate vehicle')
  $('#show-vehicle').trigger('reset')
}

const onCreateVehicleSuccess = function (response) {
  $('#create-vehicle').trigger('reset')
  api.showVehicle()
    .then((data) => {
      onReShowVehicles(data, 'Vehicle created!')
    })
    .catch(onShowVehicleFailure)
  // console.log('success')
}

const onCreateVehicleFailure = function (response) {
  $('#message').text('Failed to create vehicle')
  $('#create-vehicle').trigger('reset')
  // console.log('failure')
}

const onUpdateVehicleSuccess = function (data) {
  $('#update-vehicle').trigger('reset')
  // $('#message').show()
  $('.all-vehicles').trigger('reset')
  store.updateVehicle = true
  api.showVehicle()
    .then((data) => {
      onReShowVehicles(data, 'Your vehicle has been updated!')
    })
    .catch(onShowVehicleFailure)
}

const onUpdateVehicleFailure = function (response) {
  $('#message').text('Failed to update vehicle')
  $('#update-vehicle').trigger('reset')
}

const onDeleteVehicleSuccess = function (response) {
  // $('#message').text('Deleted hero!')
  $('#remove-vehicle').trigger('reset')
  api.showVehicle()
    .then((data) => {
      onReShowVehicles(data, 'Deleted Vehicle!')
    })
    .catch(onShowVehicleFailure)
}

const onDeleteVehicleFailure = function (response) {
  $('#message').text('Failed to delete vehicle!')
  $('#remove-vehicle').trigger('reset')
}

const getVehiclesSuccess = (data) => {
  // console.log(data)
  const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
  $('#message').text('Here are your vehicles!')
  $('.content').html(showVehiclesHtml)
}

const clearVehicleSuccess = () => {
  $('#message').text('Cleared Vehicles!')
  $('.all-vehicles').empty()
  $('#showVehiclesButton').show()
  $('#clearVehiclesButton').hide()
}

const clearVehicleFailure = (error) => {
  $('#message').text('Failed to clear vehicles!')
  console.error(error)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onShowCharacterFailure,
  onShowCharacterSuccess,
  onCreateCharacterFailure,
  onCreateCharacterSuccess,
  onUpdateCharacterSuccess,
  onUpdateCharacterFailure,
  onDeleteCharacterSuccess,
  onDeleteCharacterFailure,
  getCharactersSuccess,
  clearCharacterSuccess,
  clearCharacterFailure,
  clearVehicleSuccess,
  clearVehicleFailure,
  getVehiclesSuccess,
  onDeleteVehicleSuccess,
  onDeleteVehicleFailure,
  onCreateVehicleSuccess,
  onCreateVehicleFailure,
  onUpdateVehicleSuccess,
  onUpdateVehicleFailure,
  onShowVehicleSuccess,
  onShowVehicleFailure
}

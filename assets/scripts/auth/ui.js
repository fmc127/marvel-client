'use strict'

const store = require('./../store')
const showCharactersTemplate = require('../templates/character-listing.handlebars')

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
  $('#message').text('Behold!')
  $('#show-character').trigger('reset')
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('.all-characters').html('')
  $('.all-characters').append(showCharactersHtml)
}

const onShowCharacterFailure = function (response) {
  $('#message').text('Could not locate characters')
  $('#show-character').trigger('reset')
}

const onCreateCharacterSuccess = function (response) {
  $('#message').text('Character created!')
  $('#create-character').trigger('reset')
  // console.log('success')
}

const onCreateCharacterFailure = function (response) {
  $('#message').text('Failed to create character')
  $('#create-character').trigger('reset')
  // console.log('failure')
}

const onUpdateCharacterSuccess = function (response) {
  $('#message').text('Updated Character!')
  $('#update-character').trigger('reset')
}

const onUpdateCharacterFailure = function (response) {
  $('#message').text('Failed to update character')
  $('#update-character').trigger('reset')
}

const onDeleteCharacterSuccess = function (response) {
  $('#message').text('Deleted Character!')
  $('#remove-character').trigger('reset')
}

const onDeleteCharacterFailure = function (response) {
  $('#message').text('Failed to delete character')
  $('#remove-character').trigger('reset')
}

const getCharactersSuccess = (data) => {
  // console.log(data)
  const showCharactersHtml = showCharactersTemplate({ characters: data.characters })
  $('#message').text('Behold! Your Superhero!')
  $('.content').html(showCharactersHtml)
}

const clearCharacterSuccess = () => {
  $('#message').text('Cleared Characters!')
  $('.all-characters').empty()
  $('#showCharactersButton').show()
  $('#clearCharactersButton').hide()
}

const clearCharacterFailure = (error) => {
  $('#message').text('We aint goin nowhere!')
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
  clearCharacterFailure
}

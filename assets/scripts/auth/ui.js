'use strict'

const store = require('./../store')

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
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up').trigger('reset')
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
  $('#change-password').hide()
  $('#change-password').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-up').trigger('reset')

  store.user = null
  // store.user = response.user
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign out failed')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

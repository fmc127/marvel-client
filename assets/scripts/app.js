'use strict'

const authEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#search-character').hide()
  $('#update-character').hide()
  $('#delete-character').hide()
  $('#create-character').hide()
  $('#search-character').on('submit', authEvents.onSearch)
  $('#update-character').on('submit', authEvents.onUpdate)
  $('#delete-character').on('submit', authEvents.onDelete)
  $('#create-character').on('submit', authEvents.onCreate)
})

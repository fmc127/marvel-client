'use strict'

const authEvents = require('./auth/events')
const characterEvents = require('./auth/events.js')

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
  $('#update-character').hide()
  $('#create-character').hide()
  $('#update-character').on('submit', authEvents.onUpdate)
  $('.remove-character').on('click', authEvents.onDelete)
  $('#create-character').on('submit', authEvents.onCreate)
  $('#clearCharactersButton').hide()
  $('#clearCharactersButton').on('click', authEvents.onClear)
  $('#showCharactersButton').on('click', authEvents.onShow)
  $('#showCharactersButton').hide()
  $('#showVehiclesButton').show()
  $('#showVehiclesButton').on('click', authEvents.onShowV)
  $('#clearVehiclesButton').show()
  $('#clearVehiclesButton').on('click', authEvents.onClearV)
  $('#update-vehicle').on('submit', authEvents.onUpdateV)
  $('#create-vehicle').on('submit', authEvents.onCreateV)
  $('.remove-vehicle').on('click', authEvents.onDeleteV)

  characterEvents.addHandlers()
})

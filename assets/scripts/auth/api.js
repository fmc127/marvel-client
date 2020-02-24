'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const searchCharacter = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    data: data
  })
}

const createCharacter = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateCharacter = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteCharacter = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  searchCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter
}

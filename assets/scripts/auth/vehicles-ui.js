// const onShowVehicleSuccess = function (data) {
//   $('#showVehiclesButton').hide()
//   $('#clearVehiclesButton').show()
//   // if (store.updatevehicle === false) {
//   $('#message').text('Behold!')
//   // }
//   // store.updatevehicle = false
//   // $('#message').text('Behold!')
//   $('#show-vehicle').trigger('reset')
//   const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
//   $('.all-vehicles').html('')
//   $('.all-vehicles').append(showVehiclesHtml)
// }
//
//
// const onReShowVehicles = function (data, message) {
//   // $('#showvehiclesButton').hide()
//   // $('#clearvehiclesButton').show()
//   $('#message').text(message)
//   store.updateVehicle = false
//   // $('#message').text('Behold!')
//   $('#show-vehicle').trigger('reset')
//   const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
//   $('.all-vehicles').html('')
//   $('.all-vehicles').append(showVehiclesHtml)
// }
//
// const onShowVehicleFailure = function (response) {
//   $('#message').text('Could not locate hero')
//   $('#show-vehicle').trigger('reset')
// }
//
// const onCreateVehicleSuccess = function (response) {
//   // $('#message').text('Hero created!')
//   $('#create-vehicle').trigger('reset')
//   api.showVehicle()
//     .then((data) => {
//       onReShowVehicles(data, 'Hero created!')
//     })
//     .catch(onShowVehicleFailure)
//   // console.log('success')
// }
//
// const onCreateVehicleFailure = function (response) {
//   $('#message').text('Failed to create hero')
//   $('#create-vehicle').trigger('reset')
//   // console.log('failure')
// }
//
// const onUpdateVehicleSuccess = function (data) {
//   // $('#message').text('Your hero has been updated!')
//   $('#update-vehicle').trigger('reset')
//   // $('#message').show()
//   $('.all-vehicles').trigger('reset')
//   $('#create-vehicle').trigger('reset')
//   store.updateVehicle = true
//   api.showVehicle()
//     .then((data) => {
//       onReShowVehicles(data, 'Your hero has been updated!')
//     })
//     .catch(onShowVehicleFailure)
// }
//
// const onUpdateVehicleFailure = function (response) {
//   $('#message').text('Failed to update hero')
//   $('#update-vehicle').trigger('reset')
// }
//
// const onDeleteVehicleSuccess = function (response) {
//   // $('#message').text('Deleted hero!')
//   $('#remove-vehicle').trigger('reset')
//   api.showVehicle()
//     .then((data) => {
//       onReShowVehicles(data, 'Deleted Hero!')
//     })
//     .catch(onShowVehicleFailure)
// }
//
// const onDeleteVehicleFailure = function (response) {
//   $('#message').text('Failed to delete hero!')
//   $('#remove-vehicle').trigger('reset')
// }
//
// const getVehiclesSuccess = (data) => {
//   // console.log(data)
//   const showVehiclesHtml = showVehiclesTemplate({ vehicles: data.vehicles })
//   $('#message').text('Behold!')
//   $('.content').html(showVehiclesHtml)
// }
//
// const clearVehicleSuccess = () => {
//   $('#message').text('Cleared Heros!')
//   $('.all-vehicles').empty()
//   $('#showVehiclesButton').show()
//   $('#clearVehiclesButton').hide()
// }
//
// const clearVehicleFailure = (error) => {
//   $('#message').text('We aint goin nowhere!')
//   console.error(error)
// }

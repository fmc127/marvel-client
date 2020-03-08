// const showVehicle = function () {
//   return $.ajax({
//     url: config.apiUrl + '/vehicles',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const createVehicle = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/vehicles',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }
//
// const updateVehicle = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/vehicles/' + data.vehicle.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }
//
// const deleteVehicle = function (event) {
//   // console.log(event)
//   const id = $(event.target).data('id')
//   return $.ajax({
//     url: config.apiUrl + '/vehicles/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

// const onShowV = function (event) {
//   event.preventDefault()
//   api.showVehicle()
//     .then(ui.onShowVehicleSuccess)
//     .catch(ui.onShowVehicleFailure)
// }
//
// const onCreateV = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//   api.createVehicle(data)
//     .then(ui.onCreateVehicleSuccess)
//     .catch(ui.onCreateVehicleFailure)
// }
//
// const onUpdateV = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.updateVehicle(data)
//     .then(ui.onUpdateVehicleSuccess)
//     .catch(ui.onUpdateVehicleFailure)
// }
//
// const onDeleteV = function (event) {
//   event.preventDefault()
//   // const id = $(event.target).data('id')
//   api.deleteVehicle(event)
//     .then(ui.onDeleteVehicleSuccess)
//     .catch(ui.onDeleteVehicleFailure)
// }
//
// const onClearV = function (event) {
//   event.preventDefault()
//   ui.clearVehicleSuccess()
//   // .then(ui.onClearVehicleSuccess)
//   // .catch(ui.onClearVehicleFailure)
// }
//
// const addHandlers = () => {
//   $('#getVehiclesButton').on('click', onShow)
//   $('#clearVehiclesButton').on('click', onClear)
//   $('.all-vehicles').on('click', '.remove-vehicle', onDelete)
// }

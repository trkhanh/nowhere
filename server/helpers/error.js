const CustomError = require('custom-error-instance')

module.exports = {
  AssetDeleteForbidden: CustomError('AssetDeleteForbidden', {
    message: 'You are not authorized to delete this asset.',
    code: 2003
  })
}

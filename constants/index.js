module.exports = {
    defaultServerResponse:{
        status: 400,
        message: '',
        body: {}
    },
    productMessage:{
        PRODUCT_CREATED: 'product created successfully',
        PRODUCT_FETCHED: 'product fetched successfully',
        PRODUCT_UPDATED: 'product updated successfully',
        PRODUCT_DELETED: 'product deleted successfully',
        PRODUCT_NOT_FOUND: 'product not found'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'signup success',
        LOGIN_SUCCESS:  'login success',
        DUBLICAT_USER: 'user already exist',
        USER_NOT_FOUND: 'user not found',
        INVALID_PASSWORD: 'incorrect password'
    },
    requestValidationMessage:{
        BAD_REQUEST: 'Invalid Feilds',
        TOKEN_MISSING: 'token missing'
    },
    databaseMessage: {
        INVALID_ID: 'invalid id'
    }
}
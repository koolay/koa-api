import compose from 'koa-compose'
import axios from 'axios'
import errors from '../errors'

const handler = async(ctx, next) => {
    try {
        await next()
    } catch (error) {
        if (error instanceof errors.NotExistData) {
            ctx.body = {
                code: 404,
                msg: error.message || '数据不存在'
            }
        } else if (error instanceof errors.UserError) {
            ctx.body = {
                code: error.code,
                msg: error.message
            }
        } else if (error.name === 'UnauthorizedError') {
            ctx.status = error.statusCode || error.status || 500;
            ctx.body = {
                code: 401,
                msg: error.message
            }
        } else if (error.name === 'ValidationError') {
            let errors = []
            for (let i = 0, len = error.details.length; i < len; i++) {
                errors.push(error.details[i].message)
            }
	    ctx.body = { code: 400, msg: errors[0] } 
        } else {
            throw error
        }
    }
}

export default () => compose([
    handler
])

// Add a request interceptor
axios.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
    // Do something with response data
    return response;
}, error => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return Promise.reject(error);
});

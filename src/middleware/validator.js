import Joi from 'joi'

export default () => {
    return async(ctx, next) => {
        ctx['validate'] = (input, schema) => {
            const { error } = Joi.validate(input, schema)
            if (error) {
                ctx.throw(400, error)
            }
        }
        await next()
    }
}
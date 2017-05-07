import conn from './../conn'

export const getUsers = async function (limit, skip) {
    const [rows] = await conn.master.query('select * from user limit ?, ?', [skip, limit])
    return rows
}

export const getUserById = async function (id) {
    const [rows] = await conn.master.query('select * from user where id=? limit 1', [id])
    if (rows && rows.length > 0) {
        return rows[0]
    }
    return null
}

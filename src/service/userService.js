import * as userInfo from './../store/user/infoStore'

const PAGE_SIZE = 10

export const getUsers = async function (page) {
    page = parseInt(page) <= 0 ? 1 : page
    const skip = (page - 1) * PAGE_SIZE
    return await userInfo.getUsers(PAGE_SIZE, skip)
}

import { getUsers as getUsersList } from './../store/user/infoStore'

const PAGE_SIZE = 10

export const getUsers = async page => {
    page = parseInt(page) <= 0 ? 1 : page
    const skip = (page - 1) * PAGE_SIZE
    return await getUsersList(PAGE_SIZE, skip)
}

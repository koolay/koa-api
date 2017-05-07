import axios from 'axios'

export const getOAuthToken = async () => {
    const URL = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code'
    const response = await axios.get(URL)
    return response.data
}

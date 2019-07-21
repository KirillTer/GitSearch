import request from 'superagent'

export const searchRepo = async (search) => {
    const {body} = await request.get(
    `https://api.github.com/search/repositories?q=${search}`
    )
    return body
}
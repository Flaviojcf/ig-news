import { NextApiRequest, NextApiResponse} from 'next';

export default (request:NextApiRequest, response: NextApiResponse) => {
const users = [
    {id: 1, name: 'Flávio'},
    {id: 2, name: 'Isa'},
    {id:3, name: 'Eduardo'},
]
    return response.json(users)
}

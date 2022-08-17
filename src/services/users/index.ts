import { users } from '../../database/index'

import { IUserCreate, IUser } from '../../interfaces/users'

import { v4 as uuidv4 } from 'uuid'

const useCreateService = ({name, email}: IUserCreate) => {
    const emailAlreadyExists = users.find(user => user.email === email)

    if(emailAlreadyExists){
        throw new Error('Email already exists')
    }

    const newUser: IUser = {
        id: uuidv4(),
        name,
        email
    }

    users.push(newUser)

    return newUser
}


const userListService = () =>{
    return users
}


export { useCreateService, userListService}
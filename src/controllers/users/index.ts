import { Request, Response } from 'express'
import { useCreateService } from '../../services/users'
import { userListService } from '../../services/users'

const userCreateController = (req: Request, res:Response) =>{
    try {
        const {name,email} = req.body
        const newUser = useCreateService({name,email})
        return res.status(201).json(newUser)

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.name
            })
        }
    }
}

const userListController = (req: Request , res: Response) =>{
    try {
        const users = userListService()
        return res.json(users)

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}


export {userCreateController,userListController}
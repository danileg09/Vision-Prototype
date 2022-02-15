import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../model/User'

class UserController {
    async postUser(req: Request, res: Response) {
        const repository = getRepository(User)
        const { id, admin, email, password, name } = req.body

        const userExists = await repository.findOne({ where: { email } })
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const user = repository.create({
             id,
             admin,
             name,
             email,
             password
        })
        await repository.save(user)
        
        return res.json(user)
    }

    async getUserByEmail(req: Request, res: Response) {
        const repository = getRepository(User)
        const { email } = req.params

        const user = await repository.findOne({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        return res.json(user)
    } 
}

export default new UserController()
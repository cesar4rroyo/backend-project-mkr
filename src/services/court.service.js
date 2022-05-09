import Court from "../models/Court.js"
import { uploads } from '../utils/cloudinary.js'

export async function createCourtService(req){
    const uploader = async (path) => await uploads(path, 'court-images')
    const { url } = await uploader(input.file.path)
    const court = await Court.create(
        {
            ...req.body,
            status: 'DISPONIBLE',
            user: req.user,
            imageRefUrl: url
        }
    )
    return court
}

export async function getCourtsService(){
    const courts = await Court.find().populate([
        {
            path: 'user',
            select: 'name address email phone avatarUrl'
        }
    ]);
    return courts
}

export async function getCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findById(courtId).populate([
        {
            path: 'user',
            select: 'name address email phone avatarUrl'
        }
    ]);
    return court
}

export async function updateCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findByIdAndUpdate(courtId, req.body, {new: true}).populate([
        {
            path: 'user',
            select: 'name address email phone avatarUrl'
        }
    ]);
    return court
}

export async function deleteCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findByIdAndDelete(courtId)
    return court
}

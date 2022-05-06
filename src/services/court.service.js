import Court from "../models/Court.js"


export async function createCourtService(req){
    const {name, description} = req.body
    const court = await Court.create({name, description})
    return court
}

export async function getCourtsService(){
    const courts = await Court.find()
    return courts
}

export async function getCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findById(courtId)
    return court
}

export async function updateCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findByIdAndUpdate(courtId, req.body, {new: true})
    return court
}

export async function deleteCourtByIdService(req){
    const {courtId} = req.params
    const court = await Court.findByIdAndDelete(courtId)
    return court
}

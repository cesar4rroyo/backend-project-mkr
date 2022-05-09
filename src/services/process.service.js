import Process from "../models/Process.js"


export async function createProcessService(req){
    const process = await Process.create({
        ...req.body,
        booking: req.booking,
        user: req.user,
        price: req.price
    });
    return process;
}

export async function getProcessesService(){
    const processes = await Process.find().populate("booking").populate({
        path: 'user',
        select: 'name address email phone avatarUrl'
        }).populate("price");
    return processes;
}

export async function getProcessByIdService(req){
    const {processId} = req.params;
    const process = await Process.findById(processId).populate("booking").populate({
        path: 'user',
        select: 'name address email phone avatarUrl'
        }).populate("price");
    return process;
}

export async function updateProcessByIdService(req){
    const {processId} = req.params;
    const process = await Process.findByIdAndUpdate(processId, req.body, {new: true});
    return process;
}

export async function deleteProcessByIdService(req){
    const {processId} = req.params;
    const process = await Process.findByIdAndDelete(processId);
    return process;
}


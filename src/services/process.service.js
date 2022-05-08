import Process from "../models/Process.js"


export async function createProcessService(req){
    const process = new Process(req.body);
    await process.save();
    return process;
}

export async function getProcessesService(){
    const processes = await Process.find();
    return processes;
}

export async function getProcessByIdService(req){
    const {processId} = req.params;
    const process = await Process.findById(processId);
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


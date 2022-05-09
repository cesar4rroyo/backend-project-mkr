import Billing from "../models/Billing.js"


export async function createBillingService(req){
    const billing = await Billing.create(req.body);
    return billing;
}

export async function getBillingsService(){
    const billings = await Billing.find().populate({
        path: 'user',
        select: 'name address email phone avatarUrl'
    });
    return billings;
}

export async function getBillingByIdService(req){
    const {billingId} = req.params;
    const billing = await Billing.findById(billingId).populate({
        path: 'user',
        select: 'name address email phone avatarUrl'
    });
    return billing;
}

export async function updateBillingByIdService(req){
    const {billingId} = req.params;
    const billing = await Billing.findByIdAndUpdate(billingId, req.body, {new: true});
    return billing;
}

export async function deleteBillingByIdService(req){
    const {billingId} = req.params;
    const billing = await Billing.findByIdAndDelete(billingId);
    return billing;
}
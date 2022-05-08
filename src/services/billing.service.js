import Billing from "../models/Billing.js"


export async function createBillingService(req){
    const billing = new Billing(req.body);
    await billing.save();
    return billing;
}

export async function getBillingsService(){
    const billings = await Billing.find();
    return billings;
}

export async function getBillingByIdService(req){
    const {billingId} = req.params;
    const billing = await Billing.findById(billingId);
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
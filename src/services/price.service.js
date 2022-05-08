import Price from "../models/Price.js"

export async function createPriceService(req){
    const price = new Price(req.body);
    await price.save();
    return price;
}

export async function getPricesService(){
    const prices = await Price.find();
    return prices;
}

export async function getPriceByIdService(req){
    const {priceId} = req.params;
    const price = await Price.findById(priceId);
    return price;
}

export async function updatePriceByIdService(req){
    const {priceId} = req.params;
    const price = await Price.findByIdAndUpdate(priceId, req.body, {new: true});
    return price;
}

export async function deletePriceByIdService(req){
    const {priceId} = req.params;
    const price = await Price.findByIdAndDelete(priceId);
    return price;
}

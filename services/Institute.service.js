import {Institute} from "../model/Institute.js";

export const createInstitute = async (data) => {
    try{
        const institute  = new Institute(data);
       return await institute.save();
    }catch(err){
        throw new Error(err.message);
    }
}

export const getInstituteById  =  async (instituteId) => {
    try{
        const institute =  await Institute.findById(instituteId);
        
        if(!institute){
            throw new Error("Institute not found");
        }
        return institute;
        
    }catch(err){
        throw new Error(err.message);
    }
}
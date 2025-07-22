import * as InstituteService from '../services/Institute.service.js';

export const createInstitute = async (req, res) => {
    try{
        const data = req.body;
        const institute  = await InstituteService.createInstitute(data);

        res.status(201).json(institute);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getInstituteById =  async (req, res) => {
    try{
        const instituteId = req.params.id;
        const institute = await InstituteService.getInstituteById(instituteId);
        res.status(200).json(institute);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}
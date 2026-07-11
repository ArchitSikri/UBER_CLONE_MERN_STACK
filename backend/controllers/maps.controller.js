const mapServices = require('../services/maps.services');
const {validationResult} = require('express-validator')

module.exports.getCoordinates = async (req , res , next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message : errors.array()})
    }

    const {address} = req.query;

    try {
        const coordinates = await mapServices.getAddressCoordinate(address)
        res.status(200).json(coordinates);
    } catch(error){
        res.status(500).json({message : "INTERNAL SERVER ERROR"});
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try{
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({message : errors.array()})
       }

     const { origin , destination } = req.query;

     const DistanceTime = await mapServices.getDistanceTime(origin , destination);
    
     res.status(200).json({DistanceTime})
    }catch(err){
        console.log(err);
        res.status(500).json({message : "INTERNAL SERVER ERROR"})
    }
}

module.exports.getAutoCompleteSuggestions = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        const suggestions = await mapServices.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


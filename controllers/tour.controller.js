const tourModel = require("../models/tour.model");

let tours = [];

exports.getTours = async (req, res) => {
    try {
        const tours = await tourModel.find({})
        return res.status(200).json({
            data: tours
        })
    }
    catch (error) {
        return res.status(500).json({
            'message': 'Something went really wrong!'
        })
    }
}


exports.postTours = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await tourModel.create(reqBody)
        return res.status(201).json({
            data: result
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

exports.getToursById = async (req, res) => {
    try {
        const tourId = req.params.id;
        const tour = await tourModel.findById(tourId)
        if (!tour) {
            return res.status(404).json({
                message: `Tour with this id is not found : ${tourId}`
            })
        }
        return res.status(200).json({
            data: tour
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.updateToursById = async (req, res) => {
    try {
        const tourId = req.params.id
        const tour = await tourModel.findById(tourId)
        if (!tour) {
            return res.status(404).json({
                message: `Tour with this id is not found : ${tourId}`
            })
        }
        const reqBody = req.body
        const result = await tourModel.findByIdAndUpdate(id,reqBody, {
            new:true,
            runValidators:true
        }) 
        return res.status(200).json({
            data:result
        })
        
    } catch (error) {
        return res.status(500).json({
            data:error.message
        })
    }
    
}

exports.deleteToursById = async (req, res) => {
    try {
        const tourId = (req.params.id);
        const tour = await tourModel.findById(tourId)
        if (!tour) {
            return res.status(404).json({
                message: `Tour with this id is not found : ${tourId}`
            })
        }
        const result = await tourModel.findByIdAndDelete(tourId)
        return res.status(200).json({
            data:result
        })
    } catch (error) {
        return res.status(500).json({
            data:error.message
        })
    }
}

//sushanth@sap.com
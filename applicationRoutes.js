const express = require("express");
const Application = require("../models/application");


const router = express.Router();

// Create a new application
router.post("/create", async (req, res) => {
    try {
        const {
            applicantEmail,
            projectName,
            industryType,
            category,
            investment,
            description,
            companyName,
            applicantName,
            mobile,
            address,
            state,
            district,
            requiredApprovals,
            complianceInfo
        } = req.body;

        const newApplication = new Application({
            applicantEmail,
            projectName,
            industryType,
            category,
            investment,
            description,
            companyName,
            applicantName,
            mobile,
            address,
            state,
            district,
            requiredApprovals,
            complianceInfo
        });

        await newApplication.save();

        res.status(201).json({
            message: "Application created successfully",
            application: newApplication
        });

    } catch (error) {
        console.error("Application creation error:", error);
        res.status(500).json({
            message: error.message
           
        });
    }
});


// Update application details
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updatedApplication = await Application.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedApplication) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.json({
            message: "Application updated successfully",
            application: updatedApplication
        });

    } catch (error) {
        console.error("Application update error:", error);

        res.status(500).json({
            message: error.message
        });
    }
});

// Submit application
router.put("/submit/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updatedApplication = await Application.findByIdAndUpdate(
            id,
            {
                documents: req.body.documents,
                status: "Submitted"
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedApplication) {
            return res.status(404).json({
                message: "Application not found"
            });
        }

        res.json({
            message: "Application submitted successfully",
            application: updatedApplication
        });

    } catch (error) {
        console.error("Application submission error:", error);

        res.status(500).json({
            message: error.message
        });
    }
});

//get application by id
router.get("/:id", async (req, res) => {
    try{
        const application = await Application.findById(req.params.id);
        if(!application){
            return res.status(400).json({
                message: "Application not found"
            });
        }
        res.json({
            application
        });
    } catch(error){
        console.error("Fetch application error:" , error);

        res.status(500).json({
            message: error.message
        });
    }
});

//get all applications for authority dashboard

router.get("/", async(req, res) => {
    try{
        const applications = await Application.find();

        res.json({
            applications
        });
    } catch(error) {
        console.error("Fetch applications error", error);
        res.status(500).json({
           message: error.message
        });
    }

});




module.exports = router;
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    applicantEmail: {
        type: String,
        required: true
    },

    projectName: {
        type: String,
        required: true
    },

    industryType: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    investment: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    companyName: {
        type: String,
        required: true
    },

    applicantName: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    // Approval & Compliance
    requiredApprovals: {
        type: [String],
        default: []
    },

    complianceInfo: {
        type: String,
        default: ""
    },

    // Additional Application Form Details
    projectStatus: {
        type: String,
        default: ""
    },

    landArea: {
        type: String,
        default: ""
    },

    employment: {
        type: Number,
        default: null
    },

    businessActivity: {
        type: String,
        default: ""
    },

    waterConsumption: {
        type: String,
        default: ""
    },

    powerRequirement: {
        type: String,
        default: ""
    },

    wasteGeneration: {
        type: String,
        default: ""
    },

    pollutionPotential: {
        type: String,
        default: ""
    },

    environmentalMeasures: {
        type: String,
        default: ""
    },

    governmentSupport: {
        type: String,
        default: ""
    },

    supportRequired: {
        type: String,
        default: ""
    },

    declaration: {
        type: Boolean,
        default: false
    },

    //documents
    documents: {
        companyRegistration: {
            type: String,
            default: ""
        },
        landOwnership: {
            type: String,
            default: ""
        },
        projectReport: {
            type: String,
            default: ""
        },
        environmentalDocuments: {
            type: String,
            default: ""
        },
        additionalDocument: {
            type: String,
            default: ""
        }
    },

    // Application Status
    status: {
        type: String,
        default: "Under Review"
    }

}, {
    timestamps: true
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;

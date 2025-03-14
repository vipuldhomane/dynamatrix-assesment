import IncidentRecord from "../models/IncidentRecord.js";

export const getAllRecords = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const incidents = await IncidentRecord.find({})
      .sort({ IncidentDate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecordByPolicy = async (req, res) => {
  try {
    // This query uses the indexed PolicyNumber field.
    const incident = await IncidentRecord.findOne({
      PolicyNumber: req.params.policyNumber,
    });
    if (!incident) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(incident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecordByRegistration = async (req, res) => {
  try {
    // Query uses the indexed RegistrationNumber field.
    const incidents = await IncidentRecord.find({
      RegistrationNumber: req.params.registrationNumber,
    });
    if (!incidents || incidents.length === 0) {
      return res.status(404).json({ error: "No records found" });
    }
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecordByDriverLastName = async (req, res) => {
  try {
    // Query uses the indexed Driver_LastName field.
    const incidents = await IncidentRecord.find({
      Driver_LastName: req.params.lastName,
    });
    if (!incidents || incidents.length === 0) {
      return res.status(404).json({ error: "No records found" });
    }
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecordById = async (req, res) => {
  try {
    const incident = await IncidentRecord.findById(req.params.id);
    if (!incident) return res.status(404).json({ error: "Record not found" });
    res.status(200).json(incident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createNewRecord = async (req, res) => {
  try {
    const newIncident = new IncidentRecord(req.body);
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRecordByID = async (req, res) => {
  try {
    const updatedIncident = await IncidentRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedIncident)
      return res.status(404).json({ error: "Record not found" });
    res.status(200).json(updatedIncident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRecordById = async (req, res) => {
  try {
    const deletedIncident = await IncidentRecord.findByIdAndDelete(
      req.params.id
    );
    if (!deletedIncident)
      return res.status(404).json({ error: "Record not found" });
    res.status(200).json({ message: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

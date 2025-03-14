/**
 * @file incidentRoutes.js
 * @description Express routes for CRUD operations on incident records with indexed queries.
 */

import { Router } from "express";
const router = Router();
// const IncidentRecord = require("../models/IncidentRecord.js");

import {
  getAllRecords,
  getRecordByPolicy,
  getRecordByRegistration,
  getRecordByDriverLastName,
  getRecordById,
  createNewRecord,
  updateRecordByID,
  deleteRecordById,
} from "../Controllers/RecordController.js";

/**
 * @swagger
 * /api/incidents:
 *   get:
 *     summary: Retrieve all incident records (paginated)
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (default 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records per page (default 10)
 *     responses:
 *       200:
 *         description: A paginated list of incident records.
 */
router.get("/", getAllRecords);

/**
 * @swagger
 * /api/incidents/byPolicy/{policyNumber}:
 *   get:
 *     summary: Retrieve an incident record by Policy Number
 *     parameters:
 *       - in: path
 *         name: policyNumber
 *         required: true
 *         description: The Policy Number.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single incident record.
 *       404:
 *         description: Record not found.
 */
router.get("/byPolicy/:policyNumber", getRecordByPolicy);

/**
 * @swagger
 * /api/incidents/byRegistration/{registrationNumber}:
 *   get:
 *     summary: Retrieve incident records by Registration Number
 *     parameters:
 *       - in: path
 *         name: registrationNumber
 *         required: true
 *         description: The Registration Number of the vehicle.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of incident records.
 *       404:
 *         description: No records found.
 */
router.get("/byRegistration/:registrationNumber", getRecordByRegistration);

/**
 * @swagger
 * /api/incidents/byDriver/{lastName}:
 *   get:
 *     summary: Retrieve incident records by Driver Last Name
 *     parameters:
 *       - in: path
 *         name: lastName
 *         required: true
 *         description: The last name of the driver.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of incident records.
 *       404:
 *         description: No records found.
 */
router.get("/byDriver/:lastName", getRecordByDriverLastName);

// Standard CRUD operations as in the previous version:

/**
 * @swagger
 * /api/incidents/{id}:
 *   get:
 *     summary: Retrieve a single incident record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The incident record ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single incident record.
 *       404:
 *         description: Record not found.
 */
router.get("/:id", getRecordById);

/**
 * @swagger
 * /api/incidents:
 *   post:
 *     summary: Create a new incident record
 *     requestBody:
 *       description: Incident record object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncidentRecord'
 *     responses:
 *       201:
 *         description: Incident record created successfully.
 */
router.post("/", createNewRecord);

/**
 * @swagger
 * /api/incidents/{id}:
 *   put:
 *     summary: Update an existing incident record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The incident record ID.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Incident record object with updated data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncidentRecord'
 *     responses:
 *       200:
 *         description: Incident record updated successfully.
 *       404:
 *         description: Record not found.
 */
router.put("/:id", updateRecordByID);

/**
 * @swagger
 * /api/incidents/{id}:
 *   delete:
 *     summary: Delete an incident record
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The incident record ID.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Incident record deleted successfully.
 *       404:
 *         description: Record not found.
 */
router.delete("/:id", deleteRecordById);

export default router;

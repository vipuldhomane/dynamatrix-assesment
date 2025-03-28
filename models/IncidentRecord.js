import { Schema, model } from "mongoose";

const IncidentRecordSchema = new Schema(
  {
    CompanyReference: { type: String, index: true },
    PolicyNumber: { type: String, index: true },
    PartnerRef: String,
    IncidentDate: Date,
    AccidentCircumstances: String,
    DamageToVehicle: String,
    Pre_Existing_Damage: String,
    RegistrationNumber: { type: String, index: true },
    MAKE: String,
    MODEL: String,
    EngineSize: String,
    RegistrationDate: Date,
    ThirdPartyInsurer: String,
    ThirdPartyRef: String,
    ThirdPartyClient: String,
    ThirdPartyRegistration: String,
    Driver_FirstName: String,
    Driver_LastName: String,
    Driver_TitleLU: String,
    Driver_Address_AddressLine1: String,
    Driver_Address_Postcode: String,
    Driver_Contact_HomeTelephone: String,
    Driver_Contact_WorkTelephone: String,
    Driver_Contact_MobileTelephone: String,
    Driver_Contact_Fax: String,
    Driver_Contact_Email: String,
    RepairerName: String,
    Repairer_Contact_Telephone: String,
    Repairer_Contact_MobileTelephone: String,
    Repairer_Contact_Email: String,
    Repairer_Contact_Fax: String,
    BookingInDate: Date,
    MobileEstimateDate: Date,
    DateIn: Date,
    EstimateReceivedDate: Date,
    AuthorisedDate: Date,
    AuthorisedAmounts: Number,
    SupplementaryAuthorisedDate: Date,
    SupplementaryAuthorisedAmounts: Number,
    SupplementaryReason: String,
    CalculatedRepairDays: Number,
    EstimatedCompletionDate: Date,
    RevisedEstimatedCompletionDate: Date,
    RepairCompletionDate: Date,
    DateOut: Date,
    InvoiceReceivedDate: Date,
    InvoiceApprovedDate: Date,
    InvoiceRejectedReasons: String,
    TLDate: Date,
    PAV: String,
    SalvageAmount: Number,
    SalvageCategory: String,
    SalvageAgentName: String,
    Salvage_Contact_WorkTelephone: String,
    Salvage_Contact_MobileTelephone: String,
    Salvage_Contact_Fax: String,
    Salvage_Contact_Email: String,
    SalvageInstructedDate: Date,
    SalvageCollectedDate: Date,
    ImagesReceivedDate: Date,
    CustomerRetaining: String,
    TLCallDate: Date,
    TLChaseDates: String,
    V5CReceivedDate: Date,
    MOTReceviedDate: Date,
    FinanceLetterReceviedDate: Date,
    PackSubmittedToTPIDate: Date,
    RepairDelayNotes: String,
    ValuationDisputeNotes: String,
    TPIPAVPaymentChaseNotes: String,
    SalvageValuePaid: Number,
    TPIPAVPayment: Number,
    Status: String,
    CLSP: String,
    SalvageValueReceived: Number,
    VehicleMobile: String,
    RepairCostNet: Number,
    RepairCostVat: Number,
    RepairCostGross: Number,
    TotalLossFeeNet: Number,
    TotalLossFeeVat: Number,
    TotalLossFeeGross: Number,
    StorageAndRecoveryNet: Number,
    StorageAndRecoveryVat: Number,
    StorageAndRecoveryGross: Number,
    StorageAndRecoveryRef: String,
    EngineersFeeNet: Number,
    EngineersFeeVat: Number,
    EngineersFeeGross: Number,
    SalvageLotNumber: String,
    BillingStatus: String,
    Excess: Number,
    VehicleStatus: String,
    IMSVehicleStatus: String,
    NotificationDate: Date,
    DelAndColNet: Number,
    DelAndColVAT: Number,
    DelAndColGross: Number,
    CDStatus: String,
    Fault: String,
    AuthorisedPartsAmount: Number,
    AuthorisedLabourAmount: Number,
    AuthorisedPaintAndMaterialsAmount: Number,
    AuthorisedSpecialistAmount: Number,
    Underpinned: Boolean,
    ReplacementVehicle: String,
    TotalExcess: Number,
    SchemeName: String,
    SchemeCompanyReference: String,
    Subrogated: Boolean,
    SalvageClearedDate: Date,
  },
  { collection: "incidentRecords" }
);

export default model("IncidentRecord", IncidentRecordSchema);

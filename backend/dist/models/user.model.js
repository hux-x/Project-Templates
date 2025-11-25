"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true },
    profileImageURL: { stype: String },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    bloodType: { type: String, required: true },
    role: { type: String, enum: ["donor", "recipient", "both"], required: true },
    city: { type: String, required: true },
    lastDonation: { type: Date },
    eligible: { type: Boolean, default: true },
    location: { type: [Number], index: '2dsphere', required: true }, // [longitude, latitude]
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    tileId: { type: String },
}, { timestamps: true });
const User = mongoose_1.default.model("User", userSchema);
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcryptjs_1.default.genSalt(10);
        this.password = await bcryptjs_1.default.hash(this.password, salt);
    }
    next();
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
exports.default = User;
//# sourceMappingURL=user.model.js.map
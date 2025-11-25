import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
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
const User = mongoose.model("User", userSchema);
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};
export default User;
//# sourceMappingURL=user.model.js.map
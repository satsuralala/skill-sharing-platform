import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }, // HTML content from the editor
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['DRAFT', 'PENDING', 'APPROVED'], default: 'DRAFT' },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    reputationPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);

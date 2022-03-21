const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true, trim: true },
    authorId: { type: ObjectId, required: true, ref: "Author1"},
    tags: [{ type: String, trim: true }],
    category: [{ type: String, trim: true, required: true }],
    subcategory: [{ type: String, trim: true }],
    createdAt: { type: Date, default: null },
    updatedAt: { type: Date, default: null },
    deletedAt: { type: Date, default: null },
    publishedAt: { type: Date, default: null },
    isPublished: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog1", blogSchema);

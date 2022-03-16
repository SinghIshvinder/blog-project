const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: ObjectId, required: true, ref: "Author" },
    tags: { type: Array, default: [] },
    category: { type: Array, required: true, default: [] },
    subcategory: { type: Array, required: true, default: [] },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, immutable: true, default: () => Date.now() },
    deletedAt: { type: Date, immutable: true, default: () => Date.now() },
    publishedAt: { type: Date, immutable: true, default: () => Date.now() },
    isPublished: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

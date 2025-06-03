const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.get("/", authorController.getAllAuthors);
router.put("/:id", authorController.updateAuthor);
router.post("/", authorController.createAuthor); // ⚠️ BU SATIR ÖNEMLİ

module.exports = router;

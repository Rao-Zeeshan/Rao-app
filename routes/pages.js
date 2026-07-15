const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.render("about", { title: "About - ZeeshanBlog" });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact - ZeeshanBlog",
    submitted: false
  });
});

// Simple contact form handler (demo only - just echoes back a confirmation).
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact message:", { name, email, message });
  res.render("contact", {
    title: "Contact - ZeeshanBlog",
    submitted: true
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const articles = require("../data/articles");

// List (create) form
router.get("/create", (req, res) => {
  res.render("create-article", {
    title: "Create Article - ZeeshanBlog",
    categories: articles.getCategories(),
    error: null
  });
});

router.post("/create", (req, res) => {
  const { title, excerpt, content, category, author, image } = req.body;

  if (!title || !content) {
    return res.status(400).render("create-article", {
      title: "Create Article - ZeeshanBlog",
      categories: articles.getCategories(),
      error: "Title and content are required."
    });
  }

  const article = articles.create({
    title,
    excerpt,
    content,
    category,
    author,
    image
  });

  res.redirect(`/articles/${article.id}`);
});

// Single article detail
router.get("/:id", (req, res) => {
  const article = articles.getById(req.params.id);

  if (!article) {
    return res.status(404).render("404", { title: "Article Not Found" });
  }

  const related = articles
    .getByCategory(article.category)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  res.render("article", {
    title: `${article.title} - ZeeshanBlog`,
    article,
    related
  });
});

module.exports = router;

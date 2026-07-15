const express = require("express");
const router = express.Router();
const articles = require("../data/articles");

router.get("/", (req, res) => {
  const { category, q } = req.query;

  let list = articles.getAll();

  if (q) {
    list = articles.search(q);
  } else if (category && category.toLowerCase() !== "all") {
    list = articles.getByCategory(category);
  }

  const featured = articles.getAll().find((a) => a.featured) || articles.getAll()[0];

  res.render("index", {
    title: "ZeeshanBlog - Insightful Articles",
    articles: list,
    featured,
    categories: articles.getCategories(),
    activeCategory: category || "All",
    query: q || "",
    stats: {
      articles: articles.getAll().length,
      categories: articles.getCategories().length,
      authors: [...new Set(articles.getAll().map((a) => a.author))].length
    }
  });
});

module.exports = router;

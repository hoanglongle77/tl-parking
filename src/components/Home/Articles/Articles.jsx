import React from "react";
import styles from "./articles.module.css";

const Articles = () => {
  return (
    <div className={`container my-4`}>
      <h1 className={`text-center mb-4`}>Tin tức và bài viết mới nhất</h1>
      <div className={``}>
        <div className={"row"}>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
          <div className={`col-lg-4`}>
            <ArticleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = () => {
  return (
    <div
      className={`${styles.articleCard} card text-center mb-4 border-warning`}
    >
      <h1 className={`my-3 mx-3 p-3 rounded`}>Image</h1>
      <div className={`card-body`}>
        <h5 className={`card-title`}>Tiêu đề</h5>
        <p className={`card-text`}>Mô tả</p>
      </div>
    </div>
  );
};

export default Articles;

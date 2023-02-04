import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import NewsAPI from "newsapi";
import "../assets/css/Loading.css";

export function InitialView(props) {
  const [news, setNews] = useState();
  const newsapi = new NewsAPI(process.env.REACT_APP_NEWSAPI_KEY);

  useEffect(() => {
    newsapi.v2
      .everything({
        q: "climate",
        from: "2023-01-04",
        to: "2023-02-04",
        language: "en",
        sortBy: "relevancy",
        page: 2,
      })
      .then((response) => {
        if (response["totalResults"] >= 100) {
          setNews(response["articles"][Math.floor(Math.random() * 100)]);
        }
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        className="center-view"
        style={{
          color: "white",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        READ it KNOW it 🌻
      </div>
      <div style={{ marginTop: "5px", color: "white", fontSize: "25px" }}>
        Take the first right step by knowing
      </div>

      {news && (
        <div class="card">
          <div class="card-image">
            <img class="" src={news["urlToImage"]} alt="earth" />
          </div>
          <div class="card-content">
            <div class="card-text">
              <div class="card-title">{news["title"]}</div>

              <div class="card-sentence">{news["description"]}</div>
              <div class="card-buttons"></div>
            </div>
          </div>
        </div>
      )}

      <Button variant="contained" style={{ marginTop: "15px" }}>
        ISPE AAO
      </Button>
    </>
  );
}

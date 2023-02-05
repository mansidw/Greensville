import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import NewsAPI from "newsapi";
import "../assets/css/Loading.css";
import Weather from "../components/weather";
import Extinction from "../components/extinction";

export function InitialView(props) {
  const [news, setNews] = useState();
  const [showWeather, setShowWeather] = useState(0);
  const newsapi = new NewsAPI(process.env.REACT_APP_NEWSAPI_KEY);

  useEffect(() => {
    let yourDate = new Date();

    newsapi.v2
      .everything({
        q: "climate",
        from: yourDate.toISOString().split("T")[0],
        language: "en",
        sortBy: "relevancy",
        page: 1,
      })
      .then((response) => {
        if (response["totalResults"] >= 100) {
          setNews(response["articles"][Math.floor(Math.random() * 100)]);
        } else {
          setNews(
            response["articles"][
              Math.floor(Math.random() * response["totalResults"])
            ]
          );
        }
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!showWeather && (
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

          <Stack
            direction="row"
            spacing={2}
            style={{ justifyContent: "center", marginBottom: "5px" }}
          >
            <Button
              variant="contained"
              style={{
                marginTop: "15px",
                color: "black",
                fontFamily: "Advent Pro",
                backgroundColor: "#B9F3FC",
              }}
              onClick={() => setShowWeather(1)}
            >
              Weather Story 🌤️
            </Button>

            <Button
              variant="contained"
              style={{
                marginTop: "15px",
                color: "black",
                fontFamily: "Advent Pro",
                backgroundColor: "#B9F3FC",
              }}
              onClick={() => setShowWeather(2)}
            >
              Our Loss 🥴
            </Button>
          </Stack>
        </>
      )}

      {showWeather === 1 && <Weather />}
      {showWeather === 2 && <Extinction />}
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import weatherData from "../json/weather.json";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "../assets/css/Weather.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import MasksIcon from "@mui/icons-material/Masks";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import Tooltip from "@mui/material/Tooltip";
import cap from "../assets/images/cap.ico";
import jacket from "../assets/images/jacket.ico";
import medicalmask from "../assets/images/medical-mask.ico";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    let city = "Mumbai";
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${city}&aqi=yes`
      )
      .then(function (response) {
        for (let x in weatherData["seasons"][0]) {
          if (
            weatherData["seasons"][0][x].includes(
              response["data"]["current"]["condition"]["code"]
            )
          ) {
            setWeather(response["data"]);
            setName(x);
            break;
          }
        }
        // setName("HeavyRain");
      });
  });
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
        Weather CHRONICLES 📑
      </div>
      <div style={{ marginTop: "5px", color: "white", fontSize: "20px" }}>
        Know the best mode of transport from us!
      </div>
      {name === "Sunny" && (
        <div class="icon_container_sunny">
          <div class="hot">
            <div class="sun"></div>
          </div>
        </div>
      )}

      {name === "Partly Cloud" && (
        <div class="weather weather--sun">
          <div class="icon">
            <div class="icon__sun">
              <div class="icon__sun-lights">
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
                <div class="icon__sun-light"></div>
              </div>
            </div>
            <div class="icon__cloud">
              <div class="icon__cloud-reflect icon__cloud-reflect--1"></div>
              <div class="icon__cloud-reflect icon__cloud-reflect--2"></div>
              <svg
                class="icon__cloud-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ isolate: "isolate" }}
                viewbox="0 0 200 500"
                width="50%"
              >
                <clipPath id="cloud-path">
                  <path
                    d=" M 146.5 293 C 65.644 293 0 227.356 0 146.5 C 0 65.644 65.644 0 146.5 0 C 205.641 0 256.643 35.12 279.772 85.624 C 293.416 79.445 308.559 76 324.5 76 C 384.383 76 433 124.617 433 184.5 C 433 244.383 384.383 293 324.5 293 L 324.5 293 C 324.5 293 324.5 293 324.5 293 L 146.5 293 Z "
                    fill="currentColor"
                  />
                </clipPath>
              </svg>
            </div>
            <div class="icon__cloud-shadow"></div>
          </div>
        </div>
      )}

      {name === "Mist" && (
        <div class="icon_container_stormy">
          <div class="stormy">
            <div class="cloudC"></div>
            <div class="cloudB"></div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      )}

      {name === "Snow" && (
        <div class="weather weather--snow">
          <div class="icon">
            <div class="icon__snow">
              <div class="icon__snow-flakes"></div>
            </div>
            <div class="icon__cloud">
              <div class="icon__cloud-reflect icon__cloud-reflect--1"></div>
              <div class="icon__cloud-reflect icon__cloud-reflect--2"></div>
              <svg
                class="icon__cloud-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ isolate: "isolate" }}
                viewbox="0 0 200 500"
                width="50%"
              >
                <clipPath id="cloud-path">
                  <path
                    d=" M 146.5 293 C 65.644 293 0 227.356 0 146.5 C 0 65.644 65.644 0 146.5 0 C 205.641 0 256.643 35.12 279.772 85.624 C 293.416 79.445 308.559 76 324.5 76 C 384.383 76 433 124.617 433 184.5 C 433 244.383 384.383 293 324.5 293 L 324.5 293 C 324.5 293 324.5 293 324.5 293 L 146.5 293 Z "
                    fill="currentColor"
                  />
                </clipPath>
              </svg>
            </div>
            <div class="icon__cloud-shadow"></div>
          </div>
        </div>
      )}

      {name === "Rain" && (
        <div class="weather weather--rainbow">
          <div class="icon">
            <div class="icon__rainbow">
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
              <div class="icon__rainbow-arc"></div>
            </div>
            <div class="icon__cloud">
              <div class="icon__cloud-reflect icon__cloud-reflect--1"></div>
              <div class="icon__cloud-reflect icon__cloud-reflect--2"></div>
              <svg
                class="icon__cloud-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ isolate: "isolate" }}
                viewbox="0 0 200 500"
                width="50%"
              >
                <clipPath id="cloud-path">
                  <path
                    d=" M 146.5 293 C 65.644 293 0 227.356 0 146.5 C 0 65.644 65.644 0 146.5 0 C 205.641 0 256.643 35.12 279.772 85.624 C 293.416 79.445 308.559 76 324.5 76 C 384.383 76 433 124.617 433 184.5 C 433 244.383 384.383 293 324.5 293 L 324.5 293 C 324.5 293 324.5 293 324.5 293 L 146.5 293 Z "
                    fill="currentColor"
                  />
                </clipPath>
              </svg>
            </div>
            <div class="icon__cloud-shadow"></div>
          </div>
        </div>
      )}

      {name === "HeavyRain" && (
        <div class="weather weather--thunder">
          <div class="icon">
            <div class="icon__rain">
              <div class="icon__rain-drops"></div>
            </div>
            <div class="icon__thunder"></div>
            <div class="icon__cloud">
              <div class="icon__cloud-reflect icon__cloud-reflect--1"></div>
              <div class="icon__cloud-reflect icon__cloud-reflect--2"></div>
              <svg
                class="icon__cloud-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ isolate: "isolate" }}
                viewbox="0 0 200 500"
                width="50%"
              >
                <clipPath id="cloud-path">
                  <path
                    d=" M 146.5 293 C 65.644 293 0 227.356 0 146.5 C 0 65.644 65.644 0 146.5 0 C 205.641 0 256.643 35.12 279.772 85.624 C 293.416 79.445 308.559 76 324.5 76 C 384.383 76 433 124.617 433 184.5 C 433 244.383 384.383 293 324.5 293 L 324.5 293 C 324.5 293 324.5 293 324.5 293 L 146.5 293 Z "
                    fill="currentColor"
                  />
                </clipPath>
              </svg>
            </div>
            <div class="icon__cloud-shadow"></div>
          </div>
        </div>
      )}

      {weather && (
        <div class="info">
          <div
            style={{
              backgroundColor: "#f0ca43",
              marginRight: "15px",
              borderRadius: "5px",
            }}
          >
            <div
              class="location"
              style={{ color: "white", fontSize: "24px", fontWeight: "700" }}
            >
              {weather["location"]["name"]}
            </div>
            <div class="date" style={{ color: "white", fontSize: "18px" }}>
              {weather["location"]["localtime"]}
            </div>
            <div
              class="temp"
              style={{ color: "white", fontSize: "20px", fontWeight: "500" }}
            >
              {weather["current"]["temp_c"]} &deg;C |{" "}
              {weather["current"]["temp_f"]} &deg;F
            </div>
            <Stack
              direction="row"
              spacing={1}
              style={{ justifyContent: "center", paddingBottom: "5px" }}
            >
              <div
                class="temp"
                style={{ color: "white", fontSize: "20px", fontWeight: "500" }}
              >
                Air Quality Index -
              </div>
              {weather["current"]["air_quality"]["us-epa-index"] === 1 && (
                <Chip
                  label="Good"
                  sx={{
                    fontFamily: "Advent Pro",

                    color: "white",
                    backgroundColor: "#82CD47",
                  }}
                />
              )}
              {weather["current"]["air_quality"]["us-epa-index"] === 2 && (
                <Chip
                  label="Moderate"
                  sx={{
                    fontFamily: "Advent Pro",
                    color: "white",
                    backgroundColor: "#E5EBB2",
                  }}
                />
              )}
              {weather["current"]["air_quality"]["us-epa-index"] === 3 && (
                <Chip
                  label="Not healthy"
                  sx={{
                    fontFamily: "Advent Pro",
                    color: "white",
                    backgroundColor: "#FF8787",
                  }}
                />
              )}
              {weather["current"]["air_quality"]["us-epa-index"] === 4 && (
                <Chip
                  label="Unhealthy"
                  sx={{
                    fontFamily: "Advent Pro",
                    color: "white",
                    backgroundColor: "#F96666",
                  }}
                />
              )}
              {weather["current"]["air_quality"]["us-epa-index"] === 5 && (
                <Chip
                  label="Very Unhealthy"
                  sx={{
                    fontFamily: "Advent Pro",
                    color: "white",
                    backgroundColor: "#E64848",
                  }}
                />
              )}
              {weather["current"]["air_quality"]["us-epa-index"] === 6 && (
                <Chip
                  label="Hazardous"
                  sx={{
                    fontFamily: "Advent Pro",
                    color: "white",
                    backgroundColor: "#C21010",
                  }}
                />
              )}
            </Stack>
          </div>
          <div style={{ paddingTop: "5px" }}>
            <div
              style={{
                color: "white",
                fontSize: "22px",
                paddingBottom: "10px",
                paddingTop: "6px",
              }}
            >
              We say 🧞...
            </div>
            {name === "Sunny" &&
              weather["current"]["air_quality"]["us-epa-index"] <= 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take a Cap">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={cap} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask not necessary">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={medicalmask} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Use self transport">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsCarIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Sunny" &&
              weather["current"]["air_quality"]["us-epa-index"] > 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take a Cap">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={cap} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Necessary">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <MasksIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try public transport">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsSubwayIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Partly Cloud" &&
              weather["current"]["air_quality"]["us-epa-index"] <= 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take a Cap">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={cap} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Not required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={medicalmask} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try electric bike!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <ElectricBikeIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Partly Cloud" &&
              weather["current"]["air_quality"]["us-epa-index"] > 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take a Cap">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={cap} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <MasksIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try breezy bike!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsBikeIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Mist" &&
              weather["current"]["air_quality"]["us-epa-index"] <= 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take an Umbrella">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <UmbrellaIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Not required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={medicalmask} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Use self transport">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsCarIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Mist" &&
              weather["current"]["air_quality"]["us-epa-index"] > 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take an Umbrella">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <UmbrellaIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <MasksIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try public Transport!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsSubwayIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Snow" &&
              weather["current"]["air_quality"]["us-epa-index"] <= 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Grab your Coat!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={jacket} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Not required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={medicalmask} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Use self transport">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsCarIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {name === "Snow" &&
              weather["current"]["air_quality"]["us-epa-index"] > 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Grab your Coat!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={jacket} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <MasksIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try public Transport!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsSubwayIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {(name === "Rain" || name === "HeavyRain") &&
              weather["current"]["air_quality"]["us-epa-index"] <= 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take an Umbrella">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <UmbrellaIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Not required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <img src={medicalmask} alt="Your SVG" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Use self transport">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsCarIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}

            {(name === "Rain" || name === "HeavyRain") &&
              weather["current"]["air_quality"]["us-epa-index"] > 3 && (
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined button group"
                  size="large"
                >
                  <Tooltip title="Take an Umbrella">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <UmbrellaIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Mask Required">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <MasksIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Try public Transport!">
                    <Button sx={{ color: "black", backgroundColor: "#E8F9FD" }}>
                      <DirectionsSubwayIcon />
                    </Button>
                  </Tooltip>
                </ButtonGroup>
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;

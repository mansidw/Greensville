import React, { useEffect, useState } from "react";
import "../assets/css/extinction.css";
import axios from "axios";
import animalData from "../json/animals.json";
import plantData from "../json/plants.json";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Extinction = () => {
  const [animal, setAnimal] = useState();
  const [plant, setPlant] = useState();
  const [organism, setOrganism] = useState(0);
  const [animalindex, setAnimalindex] = useState();
  const [plantindex, setPlantindex] = useState();
  const callAnimalImage = async (choosenIndex) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${
        animalData["results"][choosenIndex]["invname"].split(",")[0]
      }&image_type=photo`
    );

    return response;
  };

  const callPlantImage = async (choosenIndex) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${
        plantData["results"][choosenIndex]["invname"].split(",")[0]
      }&image_type=photo`
    );

    return response;
  };
  useEffect(() => {
    let choosenIndex = Math.floor(Math.random() * animalData["total"]);
    let choosenIndexP = Math.floor(Math.random() * plantData["total"]);
    (async () => {
      let response = await callAnimalImage(choosenIndex);
      while (response["data"]["total"] === 0) {
        choosenIndex = Math.floor(Math.random() * animalData["total"]);
        response = await callAnimalImage(choosenIndex);
      }
      setAnimal(response["data"]["hits"][0]);
      setAnimalindex(choosenIndex);
    })();

    (async () => {
      let response = await callPlantImage(choosenIndexP);
      while (response["data"]["total"] === 0) {
        choosenIndexP = Math.floor(Math.random() * plantData["total"]);
        response = await callPlantImage(choosenIndexP);
      }
      setPlant(response["data"]["hits"][0]);
      setPlantindex(choosenIndexP);
    })();
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
        EXTINCTION AT HEART 😢
      </div>
      <div style={{ marginTop: "5px", color: "white", fontSize: "20px" }}>
        Know the innocent lives we've taken..
      </div>
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
          onClick={() => setOrganism(1)}
        >
          See PLANT 🪴
        </Button>

        <Button
          variant="contained"
          style={{
            marginTop: "15px",
            color: "black",
            fontFamily: "Advent Pro",
            backgroundColor: "#B9F3FC",
          }}
          onClick={() => setOrganism(2)}
        >
          See ANIMAL 🐯
        </Button>
      </Stack>

      {organism === 1 && animal && animalindex && (
        <>
          <div class="profile-card">
            <div class="profile-card-header">
              <div
                class="profile-image"
                style={{ backgroundImage: `url(${animal["webformatURL"]})` }}
              ></div>

              <div class="profile-info">
                <h1 class="profile-name">
                  {animalData["results"][animalindex]["comname"].toUpperCase()}
                </h1>
              </div>
            </div>

            <div class="profile-card-body">
              {/* <ul class="status">
                <li>
                  <span class="status-value">532</span>
                  <span class="status-text">Posts</span>
                </li>

                <li>
                  <span class="status-value">1.5m</span>
                  <span class="status-text">Followers</span>
                </li>

                <li>
                  <span class="status-value">423</span>
                  <span class="status-text">Following</span>
                </li>
              </ul>

              <div class="action">
                <button class="btn btn-pink">Follow</button>
                <button class="btn btn-gray-outline">Message</button>
              </div> */}
              <div
                class="temp"
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Habitat - {animalData["results"][animalindex]["region_desc"]}
              </div>
              <Stack
                direction="row"
                spacing={1}
                style={{ justifyContent: "center", paddingBottom: "5px" }}
              >
                <div
                  class="temp"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  How EXTINCT -
                </div>
                {animalData["results"][animalindex]["status"] ===
                  "Threatened" && (
                  <Chip
                    label="Threatened"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "white",
                      backgroundColor: "#F57328",
                    }}
                  />
                )}

                {animalData["results"][animalindex]["status"] ===
                  "Experimental Population, Non-Essential" && (
                  <Chip
                    label="Possibly"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "black",
                      backgroundColor: "#FFD93D",
                    }}
                  />
                )}

                {animalData["results"][animalindex]["status"] ===
                  "Endangered" && (
                  <Chip
                    label="Endangered"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "white",
                      backgroundColor: "#990000",
                    }}
                  />
                )}
              </Stack>
            </div>
          </div>
        </>
      )}

      {organism === 2 && plant && plantindex && (
        <>
          <div class="profile-cardp">
            <div class="profile-card-header">
              <div
                class="profile-image"
                style={{ backgroundImage: `url(${plant["webformatURL"]})` }}
              ></div>

              <div class="profile-info">
                <h1 class="profile-name">
                  {plantData["results"][plantindex]["comname"].toUpperCase()}
                </h1>
              </div>
            </div>

            <div class="profile-card-body">
              {/* <ul class="status">
                <li>
                  <span class="status-value">532</span>
                  <span class="status-text">Posts</span>
                </li>

                <li>
                  <span class="status-value">1.5m</span>
                  <span class="status-text">Followers</span>
                </li>

                <li>
                  <span class="status-value">423</span>
                  <span class="status-text">Following</span>
                </li>
              </ul>

              <div class="action">
                <button class="btn btn-pink">Follow</button>
                <button class="btn btn-gray-outline">Message</button>
              </div> */}
              <div
                class="temp"
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Habitat - {plantData["results"][plantindex]["region_desc"]}
              </div>
              <Stack
                direction="row"
                spacing={1}
                style={{ justifyContent: "center", paddingBottom: "5px" }}
              >
                <div
                  class="temp"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  How EXTINCT -
                </div>
                {plantData["results"][plantindex]["status"] ===
                  "Threatened" && (
                  <Chip
                    label="Threatened"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "white",
                      backgroundColor: "#F57328",
                    }}
                  />
                )}

                {plantData["results"][plantindex]["status"] ===
                  "Experimental Population, Non-Essential" && (
                  <Chip
                    label="Possibly"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "black",
                      backgroundColor: "#FFD93D",
                    }}
                  />
                )}

                {plantData["results"][plantindex]["status"] ===
                  "Endangered" && (
                  <Chip
                    label="Endangered"
                    sx={{
                      fontFamily: "Advent Pro",
                      color: "white",
                      backgroundColor: "#990000",
                    }}
                  />
                )}
              </Stack>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Extinction;

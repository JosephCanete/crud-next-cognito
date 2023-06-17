import React from "react";
import TextArea from "./TextArea";
import { Box } from "@mui/material";
import Card from "./Card";

export default function Board() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 90%",
        flexDirection: "column",
      }}
    >
      <TextArea />
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <Card sx={{ width: "300px" }} />
        <Card
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore omnis
        quo culpa aperiam officiis sint, corrupti dolor ab debitis, non facere
        tempore excepturi sequi mollitia? Amet nesciunt distinctio officia ad!"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore omnis
        quo culpa aperiam officiis sint, corrupti dolor ab debitis, non facere
        tempore excepturi sequi mollitia? Amet nesciunt distinctio officia ad!"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore omnis
        quo culpa aperiam officiis sint, corrupti dolor ab debitis, non facere
        tempore excepturi sequi mollitia? Amet nesciunt distinctio officia ad!"
        />
        <Card />
      </Box>
    </Box>
  );
}

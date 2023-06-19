import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Card from "./Card";
import TextArea from "./TextArea/TextArea";

const cardData = [
  "Lorem ip",
  "Lorem ipipisicing elit. Maiores vitae aodit, quasi earum, vero quam odio voluptatum voluptatibus eius et repellat, magribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae aodit, quasi earum, vero quam odio voluptatum voluptatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet conseepellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipiasi earum, vero quam odio voluptatum voluptatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet imi totam dolore doloribus",
  "Lorem ipsum dolor sit,tatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ips repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae aodit, quasi earum, vero quam odio voluptatum voluptatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae aodit, quasi earum, vero quam nam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. M repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae aodit, quasi earum, vero quam odio voluptatum voluptatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sitoluptatum voluptatibus eius et repellat, magnam quod tenetur optio. Animi totam dolore doloribus",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae aodit, q magnam quod tenetur optio. Animi totam dolore doloribus",
];

export default function ImageMasonry() {
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
        <Masonry columns={8} spacing={2}>
          {cardData.map((item, index) => (
            <Card content={item} key={index} />
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

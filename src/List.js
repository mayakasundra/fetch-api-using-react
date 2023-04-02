import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";

const List = () => {
  let param = useParams();
  // console.log(param);
  let [post, setPost] = useState();
  //   console.log("Post", post);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.strCategory}`
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })

      .then((data) => {
        setPost(data.meals);
        // console.log(data.meals);
      });
  }, []);

  console.log(param);
  return post ? (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={0}
      sx={{ flexWrap: "wrap", gap: 1 }}
    >
      {post.map((value) => (
        <Card sx={{ width: 345 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              <b> Recipe </b>
            </Typography>

            <Typography component="div" style={{ fontSize: "17px" }}>
              {value.strMeal}
            </Typography>
            <CardMedia
              sx={{ height: 200 }}
              image={value.strMealThumb}
              style={{ borderRadius: "5px" }}
            />
          </CardContent>
          <CardActions>
            <Link to={value.idMeal} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{ textDecoration: "none", fontWeight: "bolder" }}
              >
                Go To Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </Stack>
  ) : null;
};

export default List;

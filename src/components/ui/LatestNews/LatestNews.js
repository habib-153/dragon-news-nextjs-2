import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import topNews from "@/assets/editorsInsight1.png";
import topNews2 from "@/assets/editorsInsight2.png";
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
const LatestNews = async () => {
  const {data} = await getAllNews()
  return (
    <>
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={data[0].thumbnail_url} width={800} height={500} alt="img"></Image>
            </CardMedia>
            <CardContent>
              <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
              {data[0].category}
              </p>
              <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
              </Typography>
              <Typography gutterBottom className="my-3">
                By {data[0].author.name}- {data[0].author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                        ? data[0].details.slice(0, 200) + "..."
                        : data[0].details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Grid
          className="my-5"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {
            data.slice(0,4).map(news=>(
              <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={news.thumbnail_url} height={300} width={800} alt="img"></Image>
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                  {news.category}
                  </p>
                  <Typography gutterBottom>
                  {news.title}
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name}- {news.author.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {news.details.length > 200
                        ? data[0].details.slice(0, 200) + "..."
                        : data[0].details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;

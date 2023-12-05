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
const LatestNews = () => {
  return (
    <>
      <Box className="my-5">
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image src={topNews} width={800} alt="img"></Image>
            </CardMedia>
            <CardContent>
              <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                Technology
              </p>
              <Typography gutterBottom variant="h5" component="div">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </Typography>
              <Typography gutterBottom className="my-3">
                By Habibur Rahman- August 24, 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
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
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="img"></Image>
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                    Military Aid Package Yet
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Habibur Rahman- August 24, 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU,
                    Euro, Europe, Joe Biden, Military, News, Russia, Security,
                    UK, Ukraine, United States, Worthy News (Worthy News) – U.S.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews} width={800} alt="img"></Image>
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                    Military Aid Package Yet
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Habibur Rahman- August 24, 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU,
                    Euro, Europe, Joe Biden, Military, News, Russia, Security,
                    UK, Ukraine, United States, Worthy News (Worthy News) – U.S.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews} width={800} alt="img"></Image>
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                    Military Aid Package Yet
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Habibur Rahman- August 24, 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU,
                    Euro, Europe, Joe Biden, Military, News, Russia, Security,
                    UK, Ukraine, United States, Worthy News (Worthy News) – U.S.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image src={topNews2} width={800} alt="img"></Image>
                </CardMedia>
                <CardContent>
                  <p className="bg-red-600 max-w-fit p-2 font-semibold rounded-md text-white my-3">
                    Technology
                  </p>
                  <Typography gutterBottom>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                    Military Aid Package Yet
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Habibur Rahman- August 24, 2022
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU,
                    Euro, Europe, Joe Biden, Military, News, Russia, Security,
                    UK, Ukraine, United States, Worthy News (Worthy News) – U.S.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;

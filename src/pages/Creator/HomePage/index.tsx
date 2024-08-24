/* eslint-disable react/react-in-jsx-scope */
import Card from "../../../components/common/Card";
import { Header } from "../../../components/modules/Header";
import Grid from "@mui/material/Grid";

export function HomePage() {
  return (
    <div className="containerParent">
      <Header />
      <div
        className="body-page flex justify-evenly flex-col"
        style={{ maxWidth: "90%", margin: "0 auto" }}
      >
        <div className="jobList">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card status="helo" />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </div>
        <div className="slogan" style={{ margin: "100px auto" }}>
          <div
            className="title"
            style={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            <h2>Here's why you'll love it Jobnova</h2>
          </div>
          <div
            className="detail"
            style={{
              maxWidth: "70%",
              margin: "20px auto",
              fontSize: "1.15rem",
              color: "#999595",
            }}
          >
            <p>
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Production",
    title: "Production",
    text:
      "Working with a trained musician can take songs to the next level. Pre-Production is crucial to the recording process running smoothly.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Engineering",
    title: "Engineering",
    text:
      "Knowing what mic pres to use and what mics to capture the sounds for the song.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Mixing",
    title: "Mixing",
    text:
      "Mixing is an art unto itself.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Mastering",
    title: "Mastering",
    text:
      "Who is your master? Who do you serve?",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="about">
      <Container>
        <SectionHeader
          slogan="Make great records or go to hell"
          title="Meet Jas"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altTex}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};

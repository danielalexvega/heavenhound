/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Microphone from 'assets/feature/microphone.svg';
import Support from 'assets/feature/support.svg';
import Portico from 'assets/gear/porticoII.jpg';
import API5500 from 'assets/gear/api5500.jpg';
import Equinox from 'assets/gear/equinox.png';

const gear = [
  {
    id: 1,
    imgSrc: Equinox,
    altText: "Shadow Hills Industries Equinox",
    title: "Shadow Hills Industries Equinox",
    text: "Mic Pre, summing mixer and monitor section all in one."
  },
  {
    id: 2,
    imgSrc: Microphone,
    altText: "Shadow Hills Industries Mastering Compressor",
    title: "Shadow Hills Industries Mastering Compressor",
    text: "An ungodly beast of a mastering tool; versatile and unique sounding, can make your mix warmer and richer."
  },
  {
    id: 3,
    imgSrc: Microphone,
    altText: "Shadow Hills Industries Quad Golden Age",
    title: "Shadow Hills Industries Quad Golden Age",
    text: 'A formidable piece of no-compromise engineering, the Quad GAMA (Golden Age Microphone Amp) delivers massive, punchy, full-frequency sonics with extraordinary depth and "air."'
  },
  {
    id: 4,
    imgSrc: Microphone,
    altText: "Solid State Logic Fusion Analog Master Processor",
    title: "Solid State Logic Fusion Analog Master Processor",
    text: 'Master Processor with Vintage Drive, Violet EQ, HF Compressor, Stereo Image Enhancer, and SSL Transformer Circuits'
  },
  {
    id: 5,
    imgSrc: API5500,
    altText: "API 5500 Dual Equalizer",
    title: "API 5500 Dual Equalizer",
    text: 'Dual Equalizer with True Bypass, Range Control, Integrated Power Supply, and 1U Rackmountable Chassis'
  },
  {
    id: 6,
    imgSrc: Portico,
    altText: "Rupert Neve Designs Portico II Microphone Preamp",
    title: "Rupert Neve Designs Portico II Microphone Preamp",
    text: '2U Channel Strip with Mic Pre, Compressor, EQ, and Texture'
  },


];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}} id="gear">
     <Container >
       <SectionHeader slogan="Quality Recordings" title="You're going to listen back to this, so don't cut corners."/>

       <Grid sx={styles.grid}>
        {gear.map((item) => (
          <FeatureCard 
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};

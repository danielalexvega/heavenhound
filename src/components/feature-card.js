/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCard({
  src,
  altText = "default alt text",
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imgContainer}>
        <Image src={src} alt={altText} sx={styles.img} />
      </Box>
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.text}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    mb: 1,
  },
  imgContainer: {
    minHeight: "150px",
    display: "flex"
  },
  img: {
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
    mb: 4,
    alignSelf: "center"
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "10px"],
    },

    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};

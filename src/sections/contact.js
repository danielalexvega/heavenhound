/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Label,
  Input,
  Select,
  Textarea,
} from "theme-ui";
import SectionHeader from "components/section-header";

export default function Contact() {
  return (
    <section id="contact" sx={styles.section}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Let's get to work" title="What's the damn deal" />
      </Container>
      <Container sx={styles.containerBox}>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" mb={3} />
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" name="email" id="email" mb={3} />
          <Label htmlFor="sound">How can I help?</Label>
          <Select name="sound" id="sound" mb={3}>
            <option>Pre Production</option>
            <option>Audio Engineering</option>
            <option>Mixing</option>
            <option>Mastering</option>
            <option>A little of everything</option>
          </Select>
          <Label htmlFor="comment">Tell me about the project</Label>
          <Textarea name="comment" id="comment" rows={6} mb={3} />
          <Button>Submit</Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: ["100%", null, null, null, "80%"],
    margin: "0 auto 50px",
  },
  containerBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "800px",
    // alignItems: ["flex-start", null, null, "center"],
    // justifyContent: ["flex-start", null, null, "space-between"],
    // flexDirection: ["column", null, null, "row"],
    // pb: [0, null, null, null, null, 7],
  },
  contentBox: {
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mx: "auto",
    textAlign: "center",
    mb: ["40px", null, null, null, null, 7],
  },
  imageBox: {
    justifyContent: "center",
    textAlign: "center",
    display: "inline-flex",
    mb: [0, null, -6, null, null, "-40px", null, -3],
    img: {
      position: "relative",
      height: [245, "auto"],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
  },
};

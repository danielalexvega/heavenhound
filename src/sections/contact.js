/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container } from "theme-ui";
import SectionHeader from "components/section-header";
export default function Contact() {
  return (
    <section id="contact" sx={styles.section}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader
          slogan="Let's get to work"
          title="What's the damn deal"
        />
      </Container>
      <Container sx={styles.contactContainer}>
        <form
          name="contact-form"
          method="POST"
          action="contact/?success=true"
          data-netlify="true"
          sx={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            console.log("did this work?");
          }}
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <label htmlFor="name">Name *</label>
          <input id="name" name="name" required type="text" />
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" required type="email" />
          <label htmlFor="help">How can I help?</label>
          <select id="help" name="help">
            <option>Pre Production</option>
            <option>Audio Engineering</option>
            <option>Mixing</option>
            <option>Mastering</option>
            <option>A little of everything</option>
          </select>
          <label htmlFor="message">Tell me about the project *</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="It's still not finished yet. I'm hearing... more Aboriginal percussionists. And I want an army of digeridoos. Fifty thousand digeridoos"
            cols="30"
            rows="5"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: ["100%", null, null, null, "80%"],
    margin: "0 auto 50px",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: ["flex-start", null, null, "center"],
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
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "60%",
    width: "60%",

    label: {
      fontSize: "18px",
      lineHeight: "18px",
      margin: "15px 0 10px",
    },
    input: {
      fontSize: "18px",
      padding: "10px",
      fontFamily: "SAA-EM",
    },
    select: {
      fontSize: "16px",
      padding: "10px",
      fontFamily: "SAA-EM",
    },
    option: {
      fontFamily: "SAA-EM",
    },
    textarea: {
      outline: "none",
      padding: "10px",
      fontFamily: "SAA-EM",
      fontSize: "18px",
      color: "text",
      resize: "none",
    },

    button: {
      margin: "20px 0",
      maxWidth: "30%",
      padding: "10px 10px",
      fontFamily: "SAA-EM",
      fontSize: "18px",
      borderRadius: "45px",
      cursor: "pointer",
      border: "2px solid",
      background: "transparent",
      borderColor: "primary",
      color: "primary",
      transition: "all 0.25s",
      "&:hover": {
        color: "white",
        backgroundColor: "primary",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};

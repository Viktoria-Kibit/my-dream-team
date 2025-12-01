import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>

      {/* Картка John Doe */}
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="John Doe" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>John Doe</h2>
          <p style={styles.position}>Developer</p>
        </div>
      </div>

        {/* Картка Viktoriia Kibit */}
        <div style={styles.card}>
            <img src={"/viktoriia_kibit.jpg"} alt="Viktoriia Kibit" style={styles.photo} />
            <div style={styles.textContainer}>
                <h2 style={styles.name}>Viktoriia Kibit</h2>
                <p style={styles.position}>Project Manager</p>
            </div>
        </div>

      {/* Картка Vitaiy Yanchyk */}
      <div style={styles.card}>
        <img src={"/photo_Vitaliy_Yanchyk.jpg"} alt="Vitaliy Yanchyk" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Vitaliy Yanchyk</h2>
          <p style={styles.position}>Developer</p>
        </div>
      </div>

      {/* Картка Yelyzaveta Pryshliak */}
      <div style={styles.card}>
        <img src={"/pryshliak.jpg"} alt="Yelyzaveta Pryshliak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Yelyzaveta Pryshliak</h2>
          <p style={styles.position}>Business Analyst</p>
        </div>
      </div>
      {/* Картка Karachun Yana */}
      <div style={styles.card}>
        <img src={"/KarachunYana.png"} alt="Karachun Yana" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Karachun Yana</h2>
          <p style={styles.position}>QA</p>
        </div>
      </div>
{/* Картка Kachmar Denys */}
      <div style={styles.card}>
        <img src={"/KachmarDenys.jpg"} alt="Kachmar Denys" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Kachmar Denys</h2>
          <p style={styles.position}>UX/UI Designer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;

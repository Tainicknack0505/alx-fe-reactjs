
function Services() {
  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          color: "slategray",
        }}
      >
        Our Services
      </h1>
      <ul
        style={{
          display: "inline-block",
          listStyleType: "none",
        }}
      >
        <li
          style={{
            padding: "5px",
            margin: "5px",
            color: "silver",
            borderBottom: "1.5px solid slategray",
          }}
        >
          Technology Consulting
        </li>
        <li
          style={{
            padding: "5px",
            margin: "5px",
            color: "silver",
            borderBottom: "1.5px solid slategray",
          }}
        >
          Market Analysis
        </li>
        <li
          style={{
            padding: "5px",
            margin: "5px",
            color: "silver",
            borderBottom: "1.5px solid slategray",
          }}
        >
          Product Development
        </li>
      </ul>
    </div>
  );
}

export default Services;

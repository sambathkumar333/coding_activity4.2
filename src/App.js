import "./styles.css";

export default function App() {
  function handler(e) {
    alert(`${e.target.id}`);
  }

  return (
    <div>
      <div id="hey u clicked the button I am Div" onClick={handler}>
        {" "}
        I am Div
      </div>
      <br />
      <br />
      <span id="hey u clicked the button I am Span" onClick={handler}>
        {" "}
        I am Span
      </span>
      <br />
      <br />
      <button id="hey u clicked the button I am button" onClick={handler}>
        {" "}
        I am Button
      </button>
      <br />
      <br />
      <div id="hey u clicked the button I am link" onClick={handler}>
        {" "}
        I am Link
      </div>
      <br />
      <br />
      <div
        className="sj1"
        id="hey u clicked the button I am Div2"
        onClick={handler}
      >
        {" "}
        I am Div
      </div>
      <br />
      <br />
      <div className="sj2">
        <span id="hey u clicked the button I am Span2" onClick={handler}>
          {" "}
          I am Span
        </span>
      </div>
      <br />
      <br />
      <div className="sj3">
        <button id="hey u clicked the button I am button2" onClick={handler}>
          {" "}
          I am Button
        </button>
      </div>
      <br /> <br />
      <div
        className="sj4"
        id="hey u clicked the button I am link2"
        onClick={handler}
      >
        {" "}
        I am Link
      </div>
    </div>
  );
}

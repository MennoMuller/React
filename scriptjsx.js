const title = (
  <h1 id="main-title" title="This is a title." className="title">
    My first REACT element!
  </h1>
);

const desc = <p>I just learned how to create a React node and render it.</p>;

const header = React.createElement("header", null, title, desc);

ReactDOM.render(header, document.getElementById("root"));

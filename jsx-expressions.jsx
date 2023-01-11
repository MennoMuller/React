const desc = "This is a sentence of a description";
const first_name = "Menno";

const header = (
  <header>
    <h1 id="title">{first_name}'s title of a react element</h1>
    <p>{desc}</p>
    <input type="text" value={10 * 20} />
  </header>
);

ReactDOM.render(header, document.getElementById("root"));

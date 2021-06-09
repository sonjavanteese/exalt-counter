import { Component, html } from "@exalt/core";

const style = /*css*/`
* {
  font-size: 200%;
}

span {
  width: 4rem;
  display: inline-block;
  text-align: center;
}

button {
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 10px;
  background-color: seagreen;
  color: white;
}
`;

class MyCounter extends Component {

  state = { count: 0 };

  render() {
    return html`
      <button onclick=${() => this.state.count--}>-</button>
      <span>${this.state.count}</span>
      <button onclick=${() => this.state.count++}>+</button>
    `;
  }
}

Component.create({ name: "my-counter", styles: [style] }, MyCounter);

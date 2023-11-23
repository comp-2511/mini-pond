import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <img
          id="mru-logo"
          src="https://res.cloudinary.com/mkf/image/upload/v1686003313/mru-white_learui.png"
        />
      </section>
      <input type="text" placeholder="Write Class Name Here" />
    </div>
  );
}

export default App;

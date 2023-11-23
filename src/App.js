import { useState } from "react";
import "./App.css";

function App() {
  const [desiredClass, setDesiredClass] = useState("");
  return (
    <div className="App">
      <section className={desiredClass}>
        <img
          id="mru-logo"
          src="https://res.cloudinary.com/mkf/image/upload/v1686003313/mru-white_learui.png"
        />
      </section>
      <input
        type="text"
        placeholder="Write Class Name Here"
        value={desiredClass}
        onChange={(e) => setDesiredClass(e.target.value)}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  //hook usestate
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> Mengaph engkau meng klik tombolnya</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </div>
  )
};

export default App

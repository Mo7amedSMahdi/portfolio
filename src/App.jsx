import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button radius="sm" color="primary">
        Main button
      </Button>
    </>
  );
}

export default App;

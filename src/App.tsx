import { Button } from "@material-tailwind/react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl">Hi</h1>

        <Button
          color="blue"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Hi
        </Button>
      </div>
    </>
  );
}

export default App;

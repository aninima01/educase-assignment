import { Outlet } from "react-router";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center font-inter  ">
      <div className="flex flex-col   h-screen w-[375px] border border-neutral-300 bg-base">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import { Suspense } from "react";
import MainRouter from "./pages";
import Loading from "./components/loading/Loading";
import OnlineStatus from "./components/status/OnlineStatus";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white bg-slate-100">
      <OnlineStatus/>
      <Suspense fallback={<Loading/>}>
        <MainRouter />
      </Suspense>
    </div>
  );
};

export default App;

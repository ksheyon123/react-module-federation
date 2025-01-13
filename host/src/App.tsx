import Button from "./component/Button/Button";
import {
  AiOutlineLoading3Quarters, // 회전하는 원형 로더
  AiOutlineLoading, // 기본 회전 로더
} from "react-icons/ai";
import "./styles/global.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-900">My Application</h1>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <button className="btn-primary">Click me</button>
        </div>
      </main>
    </div>
  );
};

export default App;

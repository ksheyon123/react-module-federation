import "./styles/global.css";
import { Header } from "./component/Header/Header";
import Button from "./component/Button/Button";
import { Dropdown } from "./component/Dropdown/Dropdown";
import { Input } from "./component/Input/Input";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="py-12">
          <Input
            label="ID"
            placeholder="아이디를 입력해 주세요."
            variant="outlined"
            error="error"
          />
        </div>
      </main>
    </div>
  );
};

export default App;

import "./styles/global.css";
import { Header } from "./component/Header/Header";
import Button from "./component/Button/Button";
import { Dropdown } from "./component/Dropdown/Dropdown";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <Dropdown
          options={[
            {
              value: "val1",
              label: "val1",
            },
            {
              value: "val2",
              label: "val2",
            },
          ]}
        />
        <Button children={<>Button</>} />
      </main>
    </div>
  );
};

export default App;

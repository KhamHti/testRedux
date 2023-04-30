import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColour from "./components/ChangeColour";
import { useSelector } from "react-redux";

function App() {
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ textAlign: "center", backgroundColor: themeColor }}>
      <Profile />
      <Login />
      <div style={{ margin: 10 }}></div>
      <ChangeColour />
    </div>
  );
}

export default App;

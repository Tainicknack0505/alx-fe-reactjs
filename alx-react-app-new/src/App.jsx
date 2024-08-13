import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./components/UserContext";

function App() {
  // const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <WelcomeMessage />
      <Counter />
      <Header />
      <MainContent />
      <UserContext.Provider value={userData}></UserContext.Provider>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </>
  );
}

export default App;


import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      {/* <ProfilePage /> */}
      <Footer />
      <UserProfile
        name="A
      lice"
        age="25"
        bio="Loves hiking and photography"
      />
    </>
  );
}

export default App;

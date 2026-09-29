import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/profile") {
    return <Profile />;
  }

  // Design 1440px canvas par bana hai; chhoti screen par horizontal scroll aayega.
  return (
    <div className="w-full overflow-x-auto">
      <Landing />
    </div>
  );
}

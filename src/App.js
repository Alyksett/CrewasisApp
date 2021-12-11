import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"
import Settings from "./components/Settings";
import WeeklyInsights from "./components/WeeklyInsights";
import Billing from "./components/Billing";
import GetStarted from "./components/GetStarted";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const user = true;

  const padding = {
    padding: 5
  }
  return (
    <div>
      <div>
        <Link style={padding} to="/">AI Platform</Link>
        <Link style={padding} to="/weekly_insights">Weekly Insights</Link>
        <Link style={padding} to="/settings">Settings</Link>
        <Link style={padding} to="/billings">Billing</Link>
        <Link style={padding} to="/get_started">Get Started</Link>
        <Link style={padding} to="/login">Login</Link>
        {user
          ? <em>{user} logged in</em>
          : <Link style={padding} to="/login">Login</Link>
        }
      </div>

      
      <Routes>
        <Route path='/weekly_insights' element={<WeeklyInsights />} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/billings' element={<Billing/>} />
        <Route path='/get_started' element={<GetStarted />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={user ? <Home /> : <Navigate to='login'/>} />
      </Routes>

    </div> 
  );
}

export default App;

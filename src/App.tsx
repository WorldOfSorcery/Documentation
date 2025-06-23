import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ProtectedRoute, ProtectedRouteNoPerm } from './components/ProtectedRoute';
import './styles/App.css';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Auth Layout */}
            <Route path="/home" element={<Dashboard />} />
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Main Layout */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Navigate to="/home" />} />
              
              {/*<Route path="/citems" element={<ProtectedRoute requiredPermission='CITEM_VIEW'><CitemTab /></ProtectedRoute>} />
              <Route path="/users" element={<ProtectedRoute requiredPermission='ADMIN'><UserList /></ProtectedRoute>} />
              <Route path="/currencies" element={<ProtectedRoute requiredPermission='CURRENCY_VIEW'><CurrencyTab /></ProtectedRoute>} />
              <Route path="/unlockables" element={<ProtectedRoute requiredPermission='UNLOCKABLE_VIEW'><UnlockableTab /></ProtectedRoute>} />
              <Route path="/cosmetics" element={<ProtectedRoute requiredPermission='COSMETIC_VIEW'><CosmeticTab /></ProtectedRoute>} />
              <Route path="/channels" element={<ProtectedRoute requiredPermission='CHANNEL_VIEW'><ChannelTab /></ProtectedRoute>} />
              <Route path="/stats" element={<ProtectedRoute requiredPermission='STATS_VIEW'><StatsTab /></ProtectedRoute>} />
              <Route path="/recipes" element={<ProtectedRoute requiredPermission='RECIPE_VIEW'><RecipeTab /></ProtectedRoute>} />
              <Route path="/interactions" element={<ProtectedRoute requiredPermission='INTERACTION_VIEW'><InteractionTab /></ProtectedRoute>} />
              <Route path="/players" element={<ProtectedRoute requiredPermission='PLAYER_VIEW'><PlayerTab></PlayerTab></ProtectedRoute>} />
              <Route path="/fishing" element={<ProtectedRoute requiredPermission='FISHING_VIEW'><FishingTab></FishingTab></ProtectedRoute>} />
              <Route path="/cooldowns" element={<ProtectedRoute requiredPermission='COOLDOWN_VIEW'><CooldownTab></CooldownTab></ProtectedRoute>} />*/}
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Configuration
import { ROUTES } from "./config/constants";

// Landing Page
import LandingPage from "./components/LandingPage";

// Auth Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

// Dashboard Components
import CustomerDashboard from "./components/dashboards/CustomerDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";
import ClaimsOfficerDashboard from "./components/dashboards/ClaimsOfficerDashboard";


// Profile Components
import UserProfile from "./components/profile/UserProfile";

// Admin Components
import AdminUserManagement from "./components/admin/AdminUserManagement";
import AdminProductManagement from "./components/admin/AdminProductManagement";

// Product Components
import ProductCatalog from "./components/products/ProductCatalog";
import ProductDetail from "./components/products/ProductDetail";

// Policy Components
import MyPolicies from "./components/policies/MyPolicies";
import PolicyPurchase from "./components/policies/PolicyPurchase";
import PolicySuccess from "./components/policies/PolicySuccess";

// Claim Components
import FileClaim from "./components/claims/FileClaim";
import MyClaims from "./components/claims/MyClaims";
import ClaimDetail from "./components/claims/ClaimDetail";

// Context
import { AuthProvider } from "./context/AuthContext";

// Protected Route Component
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.LANDING} element={<LandingPage />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route
              path={ROUTES.PROFILE}
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            {/* Policy Routes (Phase 3) */}
            <Route
              path={ROUTES.POLICIES.LIST}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <MyPolicies />
                </ProtectedRoute>
              }
            />
            
            <Route
              path={ROUTES.POLICIES.PURCHASE}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <PolicyPurchase />
                </ProtectedRoute>
              }
            />
            
            <Route
              path={ROUTES.POLICIES.SUCCESS}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <PolicySuccess />
                </ProtectedRoute>
              }
            />

            {/* Claims Routes */}
            <Route
              path={ROUTES.CLAIMS.LIST}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <MyClaims />
                </ProtectedRoute>
              }
            />
            <Route
              path={ROUTES.CLAIMS.SUBMIT}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <FileClaim />
                </ProtectedRoute>
              }
            />
            {/* Shared Detail Route (Accessible by Customer and Officer) */}
            <Route
              path={ROUTES.CLAIMS.DETAIL}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER", "CLAIMS_OFFICER", "ADMIN"]}>
                  <ClaimDetail />
                </ProtectedRoute>
              }
            />

            {/* Dashboard Routes */}
            <Route
              path={ROUTES.DASHBOARD.CUSTOMER}
              element={
                <ProtectedRoute allowedRoles={["CUSTOMER"]}>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path={ROUTES.DASHBOARD.ADMIN}
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path={ROUTES.DASHBOARD.CLAIMS_OFFICER}
              element={
                <ProtectedRoute allowedRoles={["CLAIMS_OFFICER"]}>
                  <ClaimsOfficerDashboard />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path={ROUTES.ADMIN.USERS}
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminUserManagement />
                </ProtectedRoute>
              }
            />

            <Route
              path={ROUTES.ADMIN.PRODUCTS}
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminProductManagement />
                </ProtectedRoute>
              }
            />

            {/* Product Routes */}
            <Route
              path={ROUTES.PRODUCTS.CATALOG}
              element={
                <ProtectedRoute>
                  <ProductCatalog />
                </ProtectedRoute>
              }
            />

            <Route
              path={ROUTES.PRODUCTS.DETAIL}
              element={
                <ProtectedRoute>
                  <ProductDetail />
                </ProtectedRoute>
              }
            />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<Navigate to={ROUTES.LANDING} replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

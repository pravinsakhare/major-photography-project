import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

// Pages
import Home from "./components/home";
import ServicesPage from "./components/services/ServicesPage";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import BookingPage from "./components/booking/BookingPage";
import PricingPage from "./components/pricing/PricingPage";
import DynamicPricingPage from "./pages/DynamicPricingPage";
import DynamicBookingPage from "./pages/DynamicBookingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import BookingsPage from "./pages/dashboard/BookingsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";

// Import client pages
import ClientPortalPage from "./pages/client/ClientPortalPage";
import ClientGalleryPage from "./pages/client/ClientGalleryPage";
import ClientPaymentsPage from "./pages/client/ClientPaymentsPage";
import ClientFeedbackPage from "./pages/client/ClientFeedbackPage";

// Import tempo routes
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Suspense
          fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<DynamicPricingPage />} />
            <Route path="/dynamic-pricing" element={<DynamicPricingPage />} />

            {/* Client Portal Routes */}
            <Route path="/portal/:accessId" element={<ClientPortalPage />} />
            <Route
              path="/portal/:accessId/gallery"
              element={<ClientGalleryPage />}
            />
            <Route
              path="/portal/:accessId/payments"
              element={<ClientPaymentsPage />}
            />
            <Route
              path="/portal/:accessId/feedback"
              element={<ClientFeedbackPage />}
            />

            {/* Auth Routes */}
            <Route
              path="/login"
              element={
                <ProtectedRoute requireAuth={false}>
                  <LoginPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute requireAuth={false}>
                  <SignupPage />
                </ProtectedRoute>
              }
            />

            {/* Protected Routes */}
            <Route
              path="/book"
              element={
                <ProtectedRoute>
                  <DynamicBookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/bookings"
              element={
                <ProtectedRoute>
                  <BookingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
          </Routes>

          {/* Tempo Routes */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Routes>
              <Route path="/tempobook/*" element={null} />
            </Routes>
          )}
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

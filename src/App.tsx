
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import AdminDashboard from "./pages/AdminDashboard";
import CourseForm from "./pages/CourseForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import StyleBoxPage from "./pages/StyleBoxPage";
import PartnersPage from "./pages/PartnersPage";
import CertificationPage from "./pages/CertificationPage";
import PricingPage from "./pages/PricingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* New pages */}
          <Route path="/stylebox" element={<StyleBoxPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/my-courses" element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          } />
          
          {/* Admin routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/courses/new" element={
            <ProtectedRoute requiredRole="admin">
              <CourseForm />
            </ProtectedRoute>
          } />
          <Route path="/admin/courses/edit/:id" element={
            <ProtectedRoute requiredRole="admin">
              <CourseForm />
            </ProtectedRoute>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

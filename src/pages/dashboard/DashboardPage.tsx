import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingsList from "@/components/dashboard/BookingsList";

const DashboardPage = () => {
  return (
    <DashboardLayout title="My Bookings">
      <BookingsList />
    </DashboardLayout>
  );
};

export default DashboardPage;

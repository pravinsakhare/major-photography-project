import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "completed" | "cancelled";
  price: number;
}

const mockBookings: Booking[] = [
  {
    id: "1",
    service: "Wedding Photography",
    date: "2024-04-15",
    time: "14:00",
    location: "Grand Plaza Hotel",
    status: "upcoming",
    price: 2499,
  },
  {
    id: "2",
    service: "Portrait Session",
    date: "2024-03-20",
    time: "10:00",
    location: "Studio One",
    status: "completed",
    price: 399,
  },
];

const BookingsList = () => {
  return (
    <div className="space-y-6">
      {mockBookings.map((booking, index) => (
        <motion.div
          key={booking.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-playfair text-white mb-2">
                {booking.service}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-white/70">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(booking.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-white/70">
                  <Clock className="w-4 h-4 mr-2" />
                  {booking.time}
                </div>
                <div className="flex items-center text-white/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  {booking.location}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-[#D4AF37]">
                ${booking.price}
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm ${getStatusStyles(booking.status)}`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

function getStatusStyles(status: Booking["status"]) {
  switch (status) {
    case "upcoming":
      return "bg-green-500/20 text-green-400";
    case "completed":
      return "bg-blue-500/20 text-blue-400";
    case "cancelled":
      return "bg-red-500/20 text-red-400";
    default:
      return "";
  }
}

export default BookingsList;

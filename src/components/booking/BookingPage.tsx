import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "../navigation/Navbar";
import ServiceSelection, { Service } from "./ServiceSelection";
import BookingSummary from "./BookingSummary";

const availableServices: Service[] = [
  {
    id: "cinematography",
    name: "Cinematography",
    description: "Professional video production with 4K equipment",
    price: 1999,
    duration: "4 hours",
  },
  {
    id: "wedding-photo",
    name: "Wedding Photography",
    description: "Complete wedding day coverage with two photographers",
    price: 2499,
    duration: "8 hours",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "Professional post-production and color grading",
    price: 799,
    duration: "Project-based",
  },
  {
    id: "portrait",
    name: "Portrait Photoshoot",
    description: "Studio or location portrait session",
    price: 399,
    duration: "2 hours",
  },
  {
    id: "event",
    name: "Event Coverage",
    description: "Photo and video coverage for special events",
    price: 1499,
    duration: "6 hours",
  },
];

const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

const BookingPage = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedServices = availableServices.filter((service) =>
    selectedServiceIds.includes(service.id),
  );

  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0,
  );

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white mb-8 text-center">
              Book Your Session
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-playfair text-white mb-6">
                    Select Services
                  </h2>
                  <ServiceSelection
                    services={availableServices}
                    selectedServices={selectedServiceIds}
                    onServiceToggle={handleServiceToggle}
                  />
                </div>

                <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
                  <h2 className="text-2xl font-playfair text-white mb-6">
                    Appointment Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-white">Select Date</label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white",
                                !date && "text-white/50",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <label className="text-white">Select Time</label>
                        <Select onValueChange={setTime}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Choose a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Input
                        placeholder="Your Name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Input
                        type="tel"
                        placeholder="Your Phone"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <Textarea
                        placeholder="Additional Notes"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
                      />
                    </div>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <BookingSummary
                  selectedServices={selectedServices}
                  totalPrice={totalPrice}
                  date={date}
                  time={time}
                />

                <Button
                  onClick={handleSubmit}
                  disabled={selectedServices.length === 0}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B59020] hover:from-[#B59020] hover:to-[#D4AF37] text-white transition-all duration-300 transform hover:scale-105 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </Button>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    Booking request sent successfully! We'll contact you
                    shortly.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

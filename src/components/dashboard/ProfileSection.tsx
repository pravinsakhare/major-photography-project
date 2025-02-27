import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useForm } from "@/hooks/useForm";
import { User } from "@/types/auth";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  bio?: string;
}

const ProfileSection = () => {
  const { user } = useAuth();

  const { values, handleChange, handleSubmit, isSubmitting } =
    useForm<ProfileFormData>({
      initialValues: {
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        phone: "",
        bio: "",
      },
      onSubmit: async (values) => {
        // Implement profile update logic
        console.log("Update profile:", values);
      },
    });

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-[#D4AF37]"
            />
            <Button
              size="sm"
              className="absolute bottom-0 right-0 bg-[#D4AF37] hover:bg-[#B59020] rounded-full w-8 h-8 p-0"
            >
              <span className="sr-only">Change avatar</span>+
            </Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">
              {user?.firstName} {user?.lastName}
            </h2>
            <p className="text-white/70">{user?.email}</p>
          </div>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-white">
              Bio
            </Label>
            <textarea
              id="bio"
              name="bio"
              value={values.bio}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/10 border-white/20 text-white rounded-md p-2"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#D4AF37] hover:bg-[#B59020] text-white"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfileSection;

import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-20 bg-gradient-to-tr from-base-100 to-base-200">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-md animate-fade-in">
              Profile
            </h1>
            <p className="mt-2 text-base-content/70">Your profile information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
  <div className="relative group">
    <img
      src={authUser.profilePic || "/avatar.png"}
      alt="Profile"
      className="size-32 rounded-full object-cover border-4 border-primary/30 shadow-md transition-transform duration-500 group-hover:scale-105"
    />
    <label
      htmlFor="avatar-upload"
      className={`absolute bottom-0 right-0 bg-base-content p-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-primary ${
        isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
      }`}
    >
      <Camera className="w-5 h-5 text-base-200" />
      <input
        type="file"
        id="avatar-upload"
        className="hidden"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = async () => {
            const base64Image = reader.result;
            await updateProfile({ profilePic: base64Image });
          };
        }}
        disabled={isUpdatingProfile}
      />
    </label>
  </div>
  <p className="text-sm text-zinc-400">
    {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
  </p>
</div>


          {/* Profile Info */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300 shadow-inner animate-fade-in">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border border-base-300 shadow-inner animate-fade-in">
                {authUser?.email}
              </p>
            </div>
          </div>

          {/* Account Info */}
          <div className="mt-6 bg-base-300 rounded-xl p-6 animate-fade-in shadow-sm">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700 transition-all duration-300 hover:pl-2">
                <span className="text-base-content/70">Member Since</span>
                <span className="text-base font-semibold text-base-content">
                  {authUser?.createdAt
                    ? new Date(authUser.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Loading..."}
                </span>
              </div>
              <div className="flex flex-col py-2 transition-transform duration-500 hover:scale-[1.01]">
                <span className="text-sm font-medium text-base-content/70">Account Status</span>
                <span className="text-green-500 text-base font-bold animate-pulse drop-shadow">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

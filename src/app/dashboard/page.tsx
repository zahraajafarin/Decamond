"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

function DashboardPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, [user, router]);

  if (!user) {
    return null
  }

  return (
    <div className="dashboard">
      <Image
        src={"/dashboard.png"}
        width={400}
        height={338}
        alt="dashboard"
        className="dashboard-image"
        priority
      />
      <h1 className="welcome">
        Welcome {user?.name.title} {user?.name.first} {user?.name.last}!
      </h1>
    </div>
  );
}

export default DashboardPage;

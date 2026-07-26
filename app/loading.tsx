import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#FAFAF7]">
      <Image src="/images/logo1.png" alt="Loading" width={80} height={80} className="animate-pulse rounded-full" />
    </div>
  );
}

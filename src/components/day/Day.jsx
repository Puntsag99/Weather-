import { Input, Sunny, CityCoun } from "@/components";

export const Day = ({ countries }) => {
  return (
    <div className="flex w-[50%] h-[100%] bg-[#F3F4F6] relative flex-col items-center justify-center">
      <Input />

      <Sunny />

      <CityCoun />
    </div>
  );
};

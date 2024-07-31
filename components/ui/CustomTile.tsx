import { cn } from "@/utils/cn";

export const CustomTile = ({
  title,
  className
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative p-0.5 bg-transparent aspect-square flex items-center justify-center max-w-60 h-auto",
        className
      )}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Frame with 20px border */}
        <div className="absolute inset-0 border-[20px] border-brown bg-brown rounded-xl">
        <div className="relative flex flex-col items-center justify-center w-full h-full border-[15px] border-beige bg-beige rounded-2xl">
          {/* Inner content */}
          <div className="relative flex flex-col items-center justify-center w-full h-full px-4 py-2 rounded-lg bg-white">
            {/* <img src="/arrows.svg" alt="logo" className="w-8 h-8" /> */}
            <span className="font-bold text-xl text-center md:text-xl text-black dark:text-white">{title}</span>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

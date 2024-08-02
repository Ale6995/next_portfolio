import React from "react";
import { cn } from "@/utils/cn"; // Adjust this import based on your project structure
import { IconType } from "react-icons";

const Item = (
    { icon: Icon, title }: {
        icon: IconType,
        title: string


    }) => {
    return (
        <div className="flex items-center  ">
            <Icon className="text-2xl mr-4 " color="F0ECE7" />
            <p className="text-lg font-medium text-beige-200">{title}</p>
        </div>
    );
};

export const IconTitleList = ({ items, className }: {
    items: { icon: IconType; title: string }[];
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-row md:flex-col gap-4 md:gap-y-20 justify-start", className)}>
            {items.map((item, index) => (
                <Item key={index} icon={item.icon} title={item.title} />
            ))}
        </div>
    );
};


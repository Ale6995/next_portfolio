import React from "react";
import { TextRevealCard } from "./TextRevealCard";
import { div } from "three/examples/jsm/nodes/Nodes.js";

type AlertType = "Success" | "Error" | "Warning";

type AlertProps = {
  type: AlertType;
  message: string;
  onClose: () => void;
};


const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  return (
    
    
    <div
      className=" positioned  right-0 flex w-full flex-col max-w-[600px] transform items-center  gap-4 "
      style={{ zIndex: "100" }}
    >
        <a href="https://3d.alejandro-morales.com">
        <TextRevealCard
        text={message}
        revealText="Click To Check It Out!!!"
      >
        
        
      </TextRevealCard>
      
      </a>
    </div>
    
  );
};

export default Alert;
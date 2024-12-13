import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-xl font-semibold tracking-wide", className)}>
      {children}
    </h2>
  );
};

export default Title;

import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
  color: string;
}
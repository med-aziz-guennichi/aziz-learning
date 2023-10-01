"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcMultipleDevices,
} from "react-icons/fc";
import { IconType } from "react-icons";
import {MdOutlineDeveloperMode,MdOutlineMobileFriendly} from "react-icons/md";
import {FaProjectDiagram} from "react-icons/fa";
import {GiAutomaticSas} from "react-icons/gi";
import {SiTestinglibrary,SiFigma} from "react-icons/si";
import { CategorieItem } from "./category-item";


interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Test manuelle": SiTestinglibrary,
  "Developement web": MdOutlineDeveloperMode,
  "Developement mobile": MdOutlineMobileFriendly,
  "Project": FaProjectDiagram,
  "Computer Science": FcMultipleDevices,
  "Test automation": GiAutomaticSas,
  "Engineering": FcEngineering,
  "Design": SiFigma,
};
export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {
        items.map((item)=>(
            <CategorieItem 
             key={item.id}
             label={item.name}
             icon={iconMap[item.name]}
             value={item.id}
            />
        ))
      }
    </div>
  );
};

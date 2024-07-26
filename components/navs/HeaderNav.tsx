import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

interface INav {
  id: number;
  txt: string;
  link: string;
}

const headerNav: INav[] = [
  {
    id: 1,
    link: "/",
    txt: "Главная",
  },
  {
    id: 2,
    link: "/about_us",
    txt: "О нас",
  },
  {
    id: 3,
    link: "/services",
    txt: "Услуги",
  },
  {
    id: 4,
    link: "/working_process",
    txt: "Процесс работы",
  },
  {
    id: 5,
    link: "/comments",
    txt: "Отзывы",
  },
  {
    id: 6,
    link: "/contacts",
    txt: "Контакты",
  },
];

const HeaderNav = () => {
  //   return (
  //     <nav>
  //         <button className="" onClick={()=>setOpened(prev=>!prev)} >burger</button>
  //       <ul
  //         className={`md:flex md:flex-row ${opened ? "flex flex-col" : "hidden"}`}
  //       >
  //         {headerNav.map((e) => (
  //           <li key={e.id} className="">
  //             <Link href={e.link}>{e.txt}</Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-8">
        {headerNav.map((e) => (
          <NavigationMenuItem key={e.id}>
            <Link href={e.link}>{e.txt}</Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNav;

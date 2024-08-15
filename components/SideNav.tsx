"use client";

import DiscussionIcon from "@/components/icons/DiscussionIcon";
import AboutIcon from "@/components/icons/AboutIcon";
import FeedbackIcon from "@/components/icons/FeedbackIcon";
import PlusIcon from "./icons/PlusIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
    {
        route: '/',
        title: 'Discussion',
        icon: <DiscussionIcon />
    },
    {
        route: '/about',
        title: 'About',
        icon: <AboutIcon />
    },
    {
        route: '/feedback',
        title: 'Feedback',
        icon: <FeedbackIcon />
    }
];

const SideNav = () => {

    const path = usePathname();

    return (
        <div className="flex flex-col justify-between items-start bg-primary rounded-md w-full min-h-72 p-4">
            <div className="flex flex-col justify-start items-start gap-4">
                <h2
                    className="text-white text-sm font-bold"
                >
                    Pages
                </h2>
                <ul className="flex flex-col gap-1 list-none">
                    {items.map((item, indx) => (
                        <li 
                            key={indx}
                            className={`
                                relative px-4 py-1 
                                ${path === item.route 
                                    ? 'bg-black before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-secondary' 
                                    : ''
                                }
                            `}
                        >
                            <Link 
                                href={item.route}
                                className="flex items-center gap-2 w-full h-full text-xs text-white font-bold "
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        </li> 
                    ))}
                </ul>
            </div>

            <button
                className="border-2 border-secondary rounded-3xl w-full h-9 text-center"
            >
                <div className="flex justify-center items-center gap-2 text-xs font-bold text-secondary">
                    <PlusIcon />
                    New Discussion
                </div>
            </button>
        </div>
    );
}

export default SideNav;
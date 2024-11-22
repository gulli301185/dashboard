import {
  FaCalendarAlt,
  FaChartBar,
  FaFacebookMessenger,
  FaListAlt,
  FaUsersCog,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosSettings,
  IoIosStats,
} from "react-icons/io";

export const links = [
  {
    href: "#",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "Kanban",
    badge: {
      text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: FaFacebookMessenger,
    text: "Inbox",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Users",
  },
  {
    href: "#",
    icon: FaListAlt,
    text: "Products",
  },
  {
    href: "#",
    icon: IoIosLogIn,
    text: "Sign In",
  },
  {
    href: "#",
    icon: IoIosLogOut,
    text: "Sign Up",
  },
];

export const employeesData = [
  {
    title: "Total Employees",
    icon: IoIosPerson,
    count: 200,
    bgColor: "bg-gray-100",
  },
  {
    title: "On Leave",
    icon: IoIosEyeOff,
    count: 15,
    bgColor: "bg-blue-100",
  },
  {
    title: "New Joinee",
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink = [
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Plan",
    icon: GrPlan,
  },
  {
    title: "Status",
    icon: IoIosStats,
  },
  {
    title: "Setting",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Robert Fox",
    country: "USA",
    role: "Python Developer",
    image:"https://www.ulc.org/assets/ulc/blog/woman-at-work.jpg",
    bgColor: "bg-slate-100",
  },
  {
    name: "Alice Johnson",
    country: "australia",
    role: "Full stack Developer",
    image:
      "https://media.istockphoto.com/id/1098366024/photo/woman-using-laptop-paying-bills-online-and-managing-home-budget.jpg?s=612x612&w=0&k=20&c=oduF4e6-Jh2lCEfJoTrieSjaMzT94lGT1_sMvmhP0TQ=",
    bgColor: "bg-gray-100",
  },
  {
    name: "Robert Fox",
    country: "USA",
    role: "Python Developer",
    image:"https://static.vecteezy.com/system/resources/thumbnails/050/610/171/small/a-business-woman-with-her-arms-crossed-png.png",
    bgColor: "bg-slate-100",
  },
  {
    name: "Alice Johnson",
    country: "australia",
    role: "Full stack Developer",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
    bgColor: "bg-gray-100",
  },
];

export const events = [
  {
    date: "01 Aug",
    title: "Upcoming Event",
    description: "Lorem ipsem dolor sit amet.",
  },
  {
    date: "15 Sept",
    title: "Annual Conference",
    description: "Join us an annual conference.",
  },
  {
    date: "20 Sept",
    title: "Networking Meetup",
    description: "Connect with proffessional in your field.",
  },
];

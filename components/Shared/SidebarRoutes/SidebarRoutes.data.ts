import { CreditCard, Earth, Heart, Landmark, LayoutList, Lock, Settings, Star, UserPen } from "lucide-react";

export const dataSidebarElements = [
    {
        title: "Elements",
        icon: LayoutList,
        children: [
            {
                item: "Favoritos",
                href: "/favourites",
                icon: Star
            },
            {
                item: "Logins",
                href: "/logins-elements",
                icon: Earth
            },
            {
                item: "Tarjeta de credito",
                href: "/credits-card",
                icon: CreditCard
            }
        ]
    }
]

export const dataSidebarConfiguration = [
    {
        title: "Configuration",
        icon: Settings,
        children: [
            {
                item: "Profile",
                href: "/profile",
                icon: UserPen,
                premium: false
            },
            {
                item: "Security",
                href: "#",
                icon: Lock,
                premium: true
            },
            {
                item: "Suscription",
                href: "#",
                icon: Landmark,
                premium: true
            }
        ]
    }
]
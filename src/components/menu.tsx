import Dock from "@/blocks/Components/Dock/Dock"
import { Contact, FolderOpenDot, HomeIcon, User } from "lucide-react";

const items = [
    { icon: <HomeIcon size={16} />, label: 'Home', onClick: () => window.location.href = "/" },
    { icon: <User size={16} />, label: 'Profile', onClick: () => window.location.href = "/profile" },
    { icon: <FolderOpenDot size={16} />, label: 'Projects', onClick: () => window.location.href = "/projects" },
    { icon: <Contact size={16} />, label: 'Contact', onClick: () => window.location.href = "/contact" },
];

export const Menu = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-2 sm:px-4">
            <Dock
                items={items}
                panelHeight={56}
                baseItemSize={40}
                magnification={60}
                distance={180}
                spring={{ mass: 0.1, stiffness: 150, damping: 12 }}
                className="mx-auto"
            />
        </div>
    )
}
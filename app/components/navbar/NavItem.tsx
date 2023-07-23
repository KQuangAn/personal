"use client";

interface NavItemProps {
  onClick: () => void;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        px-4 
        py-3 
        hover:bg-blue-100
        rounded
        transition
        font-semibold
        cursor-pointer
      "
    >
      {label}
    </div>
  );
};

export default NavItem;

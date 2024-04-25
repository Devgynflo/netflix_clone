interface MobileMenuProps {
  visible?: boolean;
}

export default function NavbarMobileMenu({ visible }: MobileMenuProps) {
  if(!visible) {
    return null;
  }

  return (
    <div className="absolute w-60 bg-black top-8 left-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">
          Accueil
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Séries
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Films
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Nouveautés les plus regardées
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Ma liste
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Explorer par langue
        </div>
      </div>
    </div>
  );
}

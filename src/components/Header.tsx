import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-holofan-purple animate-pulse-glow"></span>
            <span className="text-xl font-bold bg-gradient-to-r from-holofan-purple to-holofan-blue bg-clip-text text-transparent">
              СИМСИТИ
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/catalog" className="text-sm font-medium transition-colors hover:text-holofan-purple">
            Каталог
          </Link>
          <Link to="/for-education" className="text-sm font-medium transition-colors hover:text-holofan-purple">
            Для учебы
          </Link>
          <Link to="/for-business" className="text-sm font-medium transition-colors hover:text-holofan-purple">
            Для бизнеса
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-holofan-purple">
            О нас
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Войти
          </Button>
          <Button>Заказать</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/catalog"
                className="text-sm font-medium transition-colors hover:text-holofan-purple"
                onClick={toggleMobileMenu}
              >
                Каталог
              </Link>
              <Link
                to="/for-education"
                className="text-sm font-medium transition-colors hover:text-holofan-purple"
                onClick={toggleMobileMenu}
              >
                Для учебы
              </Link>
              <Link
                to="/for-business"
                className="text-sm font-medium transition-colors hover:text-holofan-purple"
                onClick={toggleMobileMenu}
              >
                Для бизнеса
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium transition-colors hover:text-holofan-purple"
                onClick={toggleMobileMenu}
              >
                О нас
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" size="sm" className="justify-start">
                Войти
              </Button>
              <Button className="w-full">Заказать</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

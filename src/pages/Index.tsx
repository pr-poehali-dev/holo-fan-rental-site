import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, RotateCcw, Zap, BookOpen, Store, Users } from "lucide-react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

const Index = () => {
  // Примеры продуктов
  const featuredProducts = [
    {
      id: "1",
      title: "СИМСИТИ X50 Pro",
      description: "Премиальный голографический вентилятор для бизнес-презентаций",
      image: "/placeholder.svg",
      price: 1500,
      isPopular: true,
    },
    {
      id: "2",
      title: "СИМСИТИ EDU-30",
      description: "Идеальное решение для образовательных целей и учебных проектов",
      image: "/placeholder.svg",
      price: 900,
    },
    {
      id: "3",
      title: "СИМСИТИ Cube",
      description: "Куб из 6 голографических дисплеев для объемных проекций",
      image: "/placeholder.svg",
      price: 2500,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-holofan-purple/5 to-holofan-blue/5"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Аренда <span className="text-gradient">голографических</span> вентиляторов
              </h1>
              <p className="text-lg text-muted-foreground">
                Создавайте впечатляющие 3D презентации для учебы и бизнеса без покупки дорогостоящего оборудования
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2">
                  Выбрать модель
                  <ArrowRight size={16} />
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-holofan-purple to-holofan-blue opacity-20 blur-3xl absolute -z-10 animate-pulse-glow"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Голографический вентилятор" 
                  className="w-full max-w-md object-contain animate-float" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground">
              Мы предлагаем современное оборудование и сервис высокого качества для ваших проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Clock}
              title="Быстрая доставка"
              description="Доставляем оборудование в день заказа или на следующий день по всему городу"
            />
            <FeatureCard 
              icon={RotateCcw}
              title="Простой возврат"
              description="Забираем оборудование сами в удобное для вас время по окончании аренды"
            />
            <FeatureCard 
              icon={Zap}
              title="Техподдержка"
              description="Наши специалисты помогут настроить и запустить оборудование в любое время"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Популярные модели</h2>
            <Link to="/catalog" className="text-sm font-medium text-holofan-purple flex items-center gap-1">
              Смотреть все
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Для кого наши решения</h2>
            <p className="text-muted-foreground">
              Голографические вентиляторы – это универсальный инструмент для различных задач и проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-holofan-purple/20 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-holofan-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Для учебы</h3>
              <p className="text-muted-foreground">
                Создавайте инновационные проекты и презентации для школьных и университетских работ
              </p>
              <Button variant="link" className="mt-4">
                Подробнее
              </Button>
            </div>
            
            <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-holofan-blue/20 flex items-center justify-center mb-4">
                <Store className="w-8 h-8 text-holofan-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Для бизнеса</h3>
              <p className="text-muted-foreground">
                Привлекайте внимание клиентов и партнеров с помощью эффектных 3D презентаций продуктов
              </p>
              <Button variant="link" className="mt-4">
                Подробнее
              </Button>
            </div>
            
            <div className="glass-card rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-holofan-accent/20 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-holofan-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Для мероприятий</h3>
              <p className="text-muted-foreground">
                Создавайте незабываемое впечатление на выставках, конференциях и корпоративных событиях
              </p>
              <Button variant="link" className="mt-4">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-holofan-dark text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы создать что-то впечатляющее?</h2>
            <p className="text-gray-300 mb-8">
              Арендуйте голографический вентилятор уже сегодня и удивите всех своей презентацией
            </p>
            <Button size="lg" className="bg-holofan-purple hover:bg-holofan-purple/90">
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-holofan-dark text-gray-300 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-6 w-6 rounded-full bg-holofan-purple"></span>
                <span className="text-xl font-bold text-white">СИМСИТИ</span>
              </div>
              <p className="text-sm">
                Аренда голографических вентиляторов для впечатляющих 3D презентаций и проектов
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-white mb-4">Услуги</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-holofan-purple">Для учебы</a></li>
                  <li><a href="#" className="hover:text-holofan-purple">Для бизнеса</a></li>
                  <li><a href="#" className="hover:text-holofan-purple">Для мероприятий</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-4">Компания</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-holofan-purple">О нас</a></li>
                  <li><a href="#" className="hover:text-holofan-purple">Контакты</a></li>
                  <li><a href="#" className="hover:text-holofan-purple">Вакансии</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm">
                  <li>info@simcity.ru</li>
                  <li>+7 (800) 123-45-67</li>
                  <li>г. Москва, ул. Примерная, 123</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2023 СИМСИТИ. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

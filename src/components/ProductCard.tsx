import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  isPopular?: boolean;
}

const ProductCard = ({ title, description, image, price, isPopular }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
      {isPopular && (
        <div className="absolute top-3 right-3 z-10 bg-holofan-accent text-white text-xs font-bold px-2 py-1 rounded-full">
          Популярный
        </div>
      )}
      <div className="aspect-video overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-xl font-bold text-holofan-purple">{price} ₽<span className="text-sm font-normal text-muted-foreground">/день</span></div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          Арендовать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

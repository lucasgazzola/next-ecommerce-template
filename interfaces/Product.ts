export default interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingInterface;
}

interface RatingInterface {
  rate: number;
  count: number;
}

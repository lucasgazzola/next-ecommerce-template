export default interface UserInterface {
  id: number;
  email: string;
  username: string;
  password: string;
  name: string;
  phone: string;
  adress?: AdressInterface;
}

interface AdressInterface {
  id: number;
  geolocation?: GeolocationInterface;
  city: string;
  number: number;
  street: string;
  zipcode: string;
  user: UserInterface;
  userId: number;
}

interface GeolocationInterface {
  id: number;
  lat: string;
  long: string;
  adress: AdressInterface;
}

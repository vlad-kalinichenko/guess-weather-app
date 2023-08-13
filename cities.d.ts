declare module 'cities.json' {
  export type City = {
    country: string;
    lat: string;
    lng: string;
    name: string;
  };

  const cities: City[];

  export default cities;
}

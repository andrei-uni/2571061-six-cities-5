export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export function createOfferRoute(id: string): string {
  return AppRoutes.Offer.replace(':id', id);
}

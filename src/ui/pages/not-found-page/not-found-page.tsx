import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../app-routes';

export function NotFoundPage() {
  return (
    <div>
      <h1>{'404 Not Found'}</h1>
      <Link to={AppRoutes.Main}>Вернуться на главную</Link>
    </div>
  );
}

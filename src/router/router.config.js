import Index from "../page/Index";
import Stencil from "../page/Stencil";
import BuildCenter from "../page/BuildCenter";
import MaterialSelect from "../page/MaterialSelect";
import PageLibrary from "../page/PageLibrary";
import ShowPage from "../RenderPage/ShowPage";
import Login from '../page/Login';

export const routesMap = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/home',
    component: Index,
    childrenRoutes: [
      {
        path: '/home/stencil',
        component: Stencil,
        exact: true,
      },
      {
        path: '/home/pageLibrary',
        component: PageLibrary,
        exact: true,
      },
      {
        path: '/home/materialSelect',
        component: MaterialSelect,
        exact: true,
      },
      {
        path: '/home/buildCenter',
        component: BuildCenter,
        exact: true,
      },
    ],
  },
  {
    path: '/showPage',
    component: ShowPage,
    childrenRoutes: [],
  },
];

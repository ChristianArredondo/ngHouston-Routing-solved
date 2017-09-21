import { ViewComponent } from './view/view.component';
import { SelectComponent } from './select/select.component';


export const MY_ROUTES = [
  { path: '', component: SelectComponent },
  { path: 'recipes/:id', component: ViewComponent },
];

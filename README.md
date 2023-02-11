# Routing

In Angular, routes are used to navigate between different components in your application. You can create routes using the RouterModule and the Routes array. Here's an example of how to create routes in Angular:

* Import the RouterModule and Routes array in your module:
```import { RouterModule, Routes } from '@angular/router';```

* Define an array of routes, where each route is defined as an object with a path and a component property:
```
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
```
* In the imports array of your module, add the RouterModule.forRoot(routes) method:
```
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  ...
})
```

* In your component's template, add the <router-outlet></router-outlet> directive, which acts as a placeholder for the component that is associated with the currently active route:

```
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>
<router-outlet></router-outlet>
```

* To navigate to a specific route, use the routerLink directive in your template, or programmatically navigate using the Router service in your component:
```
constructor(private router: Router) {}
goToAbout() {
  this.router.navigate(['/about']);
}
```

* In Angular, you can set the default route to the HomeComponent by adding a catch-all route at the end of the Routes array, with a path of an empty string ('') or '**':
```
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
```
HashLocationStrategy: This is the default route strategy in Angular, which uses the # symbol in the URL to specify the route. For example, http://example.com/#/home. The # symbol is not sent to the server, so this strategy works with any server-side technology.
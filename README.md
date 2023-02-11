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

PathLocationStrategy: This strategy uses the path in the URL to specify the route. For example, http://example.com/home. This strategy requires server-side support, as the full URL path must be mapped to the correct route on the server.

Nowadays, the PathLocationStrategy is the preferred route strategy for Angular applications, as it provides a cleaner URL structure and is better suited for search engine optimization (SEO).

However, the choice of route strategy depends on the specific requirements of your application and the hosting environment you are using. If your application is hosted on a server that doesn't support the full URL path, you may need to use the HashLocationStrategy.

In either case, it's important to understand the trade-offs and to choose the route strategy that best fits your needs.

Dynamic route parameters allow you to pass values from the URL to your component and use those values to retrieve data or display information based on the parameters.
* In this example, the ActivatedRoute service is injected into the ProductComponent using the constructor. The route.snapshot.paramMap.get('id') method is used to retrieve the id value from the URL and store it in the id property of the component.
* Now, when you navigate to /product/42, for example, the ProductComponent will display "Product ID: 42".
* If you do this
```
 ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  ```
  the you will get this error: Object is possibly 'null'.
* The error "Object is possibly 'null'" occurs because the ActivatedRoute object may not be available at the time of retrieval. To handle this error, you can use the first() operator from the rxjs library to ensure that the ActivatedRoute object is available before attempting to retrieve the id value.
* In this updated code, the route.params property is a Observable that emits the route parameters whenever the parameters change. The first() operator is used to retrieve the first emitted value and then the subscribe method is used to retrieve the id value. This ensures that the id value is only retrieved once the ActivatedRoute object is available.

Navigating using code
* You can navigate to a different route in Angular using the Router service. The Router service provides methods for navigating to different routes in your application, such as navigate, navigateByUrl, and navigateByData
* In the above example, the HomeComponent has a button that when clicked will navigate to the /product/42 route. The Router service is injected into the HomeComponent in the constructor, and the navigate method is used to navigate to the desired route. The first argument of the navigate method is an array that represents the path to the desired route, in this case ['/product', 42].

Query Parameters
* You can pass query parameters to a route in Angular using the queryParams property of the NavigationExtras object when calling the navigate method of the Router service.
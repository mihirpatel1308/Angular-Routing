
<!-- Generate Product Module -  -->
ng generate c product/product-list

<!--Generate product component  -->
ng generate c product/product-detail

<!-- Update app.routing module -->
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  // { path: '**', component: PageNotFoundComponent },
];


-----------------------------------

In App component first set <router-outlet></router-outlet> only

-----------------------------

<!-- Product list ts -  -->

 products =  [
    {  id:  1,  name:  'Product 1' },
    {  id:  2,  name:  'Product 2' },
    {  id:  3,  name:  'Product 3' },
    {  id:  4,  name:  'Product 4' },
    {  id:  5,  name:  'Product 5' }      
  ];

------------------------------------------
<!-- product list html -->
<div>
    <h1>
        Products
    </h1>
    <ul>
        <li *ngFor="let product of products">
            <a routerLink="/product/{{product.id}}">
                {{ product.name }}
            </a>
        </li>
    </ul>
</div>

----------------------------------------------------

<!-- Product Detail component -->

<div>
    <h1>
      Product by paramMap #{{productId}}
    </h1>

    <h1>
        Product by paramMap #{{productIdByParam}}
      </h1>
  </div>

  <a [routerLink] = "'/products'">
    Go to Products List
  </a>

<!-- Product detail ts file -->

productId: any;
  productIdByParam: any;
  constructor(private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    // debugger
    this.productId = this.activeRoute.snapshot.paramMap.get('productId');
    
    this.activeRoute.paramMap.subscribe((params: any) => {
      debugger
      console.log(params.get('productId'));
      this.productIdByParam = params.get('productId');
    });
  }

---------------------------------------------------------------

  <!-- Create core module -->
ng g m core/core

ng g s core/guards/auth-guard

<!-- Auth Guard service -->
export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate() {
    return true;
  }

}

<!--Update routing module  -->
 { path: 'product/:id',canActivate:[AuthGuard], component: ProductDetailComponent },

<!-- Router link active class -->
  <span>
    <ul>

      <li><a routerLink="/products" routerLinkActive="active">Products
        </a></li>

      <li><a routerLink="/product/1" routerLinkActive="active">Products detail
        </a></li>
    </ul>
  </span>

  <!-- Active class -->
  .active{
    background-color: 'red';
    color:green !important
}

<!-- For child route of the module -->
ng g m employee --routing

ng g c employee/employee-list

ng g c employee/employee-detail


<!-- Updated App routing module -->
 {
    path: 'employees',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [
      AuthGuard
    ],
  },

<!-- Employee Routing module -->
const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-detail/:id',
    component: EmployeeDetailComponent,
  }];

  <!--Employee List -->
  <div class="container">
    <div class="row mb-2">

    </div>
    <div class="row">

    </div>
    <div class="row">
        <div class="col-md-12">
            <div *ngFor="let user of users" class="my-3">
                <div class="row">
                    <div class="col col-4"> Name: {{ user.name }}</div>
                    <div class="col col-4">
                        Joined Date: {{ user.joinedDate | date: "fullDate" | uppercase }}

                    </div>
                    <div class="col col-4">
                        <button [routerLink]="['employee-detail',1]">Employee Detail</button>

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];

<!-- Employee Details  -->
<a [routerLink] = "'/employees'">
    Go To Employee List
</a>


<!-- Updated App component -->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <!-- [...] -->

  <div class="bg-white mb-4">
    <div class="row">
      <div class="col col-6">
        <a routerLink="/products" routerLinkActive="active">Products
        </a>
      </div>

      <div class="col col-6">
        <a routerLink="employees" routerLinkActive="active">Employees
        </a>
      </div>
    </div>

  </div>
  <router-outlet></router-outlet>
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StaticsComponent } from './pages/dashboard/statics/statics.component';
import { QuoteComponent } from './pages/dashboard/quote/quote.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { hasTokennGuard } from './AuthInterceptor.service';
import { UnauthorizedComponent } from './pages/dashboard/unauthorized/unauthorized.component';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { TaskPageComponent } from './pages/dashboard/task-page/task-page.component';
import { GalleryHubComponent } from './pages/dashboard/gallery-hub/gallery-hub.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ui/home', component: HomeComponent },
  { path: 'ui/services', component: ServicesComponent },
  { path: 'ui/about', component: AboutComponent },
  { path: 'ui/login', component: LoginComponent },
  { path: 'ui/gallery', component: GalleryComponent },
  { path: 'ui/shopcard', component: CheckOutComponent },
  { path: 'ui/unauthorized', component: UnauthorizedComponent },
  { path: 'ui/dashboard', component: DashboardComponent,
      canActivate: [hasTokennGuard],
      children: [
            {
                path: '',
                redirectTo: 'dash',
                pathMatch: 'full',
            },{
                  path: 'dash', // child route path
                  component: StaticsComponent, // child route component that the router renders
      //         },{
      //             path: 'inbox', // child route path
      //             component: InboxComponent, // child route component that the router renders
              },{
                  path: 'quote', // child route path
                  component: QuoteComponent, // child route component that the router renders
              },
              {
                  path: 'users', // child route path
                  component: UsersComponent, // child route component that the router renders
              },{
                  path: 'products', // child route path
                  component: ProductsComponent, // child route component that the router renders 
              },{
                  path: 'tasks', // child route path
                  component: TaskPageComponent, // child route component that the router renders gallery-hub
              },{
                path: 'galleryhub', // child route path
                component: GalleryHubComponent, // child route component that the router renders gallery-hub
            }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

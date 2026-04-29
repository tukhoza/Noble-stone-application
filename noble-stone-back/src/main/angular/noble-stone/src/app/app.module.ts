import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { ServicesComponent } from './pages/services/services.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { EmptyQuoteComponent } from './pages/check-out/empty-quote/empty-quote.component';
import { GraphicComponent } from './pages/services/graphic/graphic.component';
import { PhotographyComponent } from './pages/services/photography/photography.component';
import { VideographyComponent } from './pages/services/videography/videography.component';
import { WebsiteComponent } from './pages/services/website/website.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuoteComponent } from './pages/dashboard/quote/quote.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { StaticsComponent } from './pages/dashboard/statics/statics.component';
import { UnauthorizedComponent } from './pages/dashboard/unauthorized/unauthorized.component';
import { TaskPageComponent } from './pages/dashboard/task-page/task-page.component';
import { AddUserComponent } from './pages/dashboard/users/add-user/add-user.component';
import { AuthInterceptor } from './AuthInterceptor.service';
import { ProductsComponent } from './pages/dashboard/products/products.component';
import { AddProductComponent } from './pages/dashboard/products/add-product/add-product.component';
import { AddTaskComponent } from './pages/dashboard/task-page/add-task/add-task.component';
import { GalleryHubComponent } from './pages/dashboard/gallery-hub/gallery-hub.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    LoginComponent,
    CheckOutComponent,
    ServicesComponent,
    EmptyQuoteComponent,
    GraphicComponent,
    PhotographyComponent,
    VideographyComponent,
    WebsiteComponent,
    DashboardComponent,
    QuoteComponent,
    UsersComponent,
    StaticsComponent,
    UnauthorizedComponent,
    TaskPageComponent,
    AddUserComponent,
    ProductsComponent,
    AddProductComponent,
    AddTaskComponent,
    GalleryHubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule
    
  ],
  providers: [provideHttpClient(
    withInterceptors([AuthInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }

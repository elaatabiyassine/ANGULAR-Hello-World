import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponentComponent } from './user-item-component/user-item-component.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({  //NgModuleDecorator, remember a decorator adds metadata to our application
  declarations: [
    AppComponent, //Specifies the higher level component
    HelloWorldComponent,
    UserItemComponentComponent,
    UserListComponent
    //In the declaration part, you declare the components that you will use in your application
  ],
  imports: [
    BrowserModule //Dependencies that this module has, we want our app to run on a browser so we depend on the Browser Module (Mainly used for dependency injection)
  ],
  providers: [], //also used for dependency injection
  bootstrap: [AppComponent] //tells that when this module is used to bootstrap an app we should use the App component as the top-level component
})
export class AppModule { }

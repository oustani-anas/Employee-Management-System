import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';  // Import EmployeeService

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add HttpClientModule to imports
  ],
  providers: [EmployeeService],  // Provide the EmployeeService
  bootstrap: [AppComponent]
})
export class AppModule { }

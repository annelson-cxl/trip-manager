import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [],
  declarations: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

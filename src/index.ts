import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AButtonComponent } from './components/a-button/a-button.component';


const components = [
  AButtonComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class AtlazWebGuiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AtlazWebGuiModule
    };
  }
}

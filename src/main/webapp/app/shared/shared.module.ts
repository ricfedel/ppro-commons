import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PprocommonsSharedLibsModule, PprocommonsSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PprocommonsSharedLibsModule, PprocommonsSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [PprocommonsSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PprocommonsSharedModule {
  static forRoot() {
    return {
      ngModule: PprocommonsSharedModule
    };
  }
}

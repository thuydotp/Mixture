import { NgModule } from '@angular/core';

import { GlobalComponent }   from './global.component';
import { GlobalRoutingModule }   from './global-routing.module';
@NgModule({
    imports: [GlobalRoutingModule],
    declarations: [GlobalComponent],
    providers: []
})
export class GlobalModule { }

import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
    imports: [
        // ...
        EntityDataModule.forRoot(entityConfig),
    ],
})
export class AppModule { }

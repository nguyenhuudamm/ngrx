import { EntityMetadataMap } from '@ngrx/data';
import { User } from './user/user.model';

const entityMetadata: EntityMetadataMap = {
    User: {},
};

// Cấu hình Nâng cao hơn tí nữa

export const appEntityMetadata: EntityMetadataMap = {
    Villain: {
        villainSelectId, // necessary if key is not `id`

        /* optional settings */
        entityName: 'Villain', // optional because same as map key
        filterFn: nameAndSayingFilter,
        entityDispatcherOptions: { optimisticAdd: true, optimisticUpdate: true }
    }
};



export const entityConfig = {
    entityMetadata,
};

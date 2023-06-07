// file cấu hình endpoint cho từng loại Stata
import { DefaultDataServiceConfig } from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'https://api.example.com', // URL gốc của API

    // Cấu hình cho từng state API
    entityHttpResourceUrls: {
        User: {
            // URL endpoint cho state User
            entityResourceUrl: 'https://api.example.com/users',
            collectionResourceUrl: 'https://api.example.com/users',
        },
        // Cấu hình cho các state API khác (nếu có)
    },
};


//  Cung cấp trong App.module
providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
]

import { userReducer } from './user.reducer';
import { UserEffects } from './user.effect';


imports: [
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects])
],
providers: [UserEffects],
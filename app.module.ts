import { userReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';


imports: [
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects])
],
  
  
  
  
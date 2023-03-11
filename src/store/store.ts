import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './slice';
import { 
   PersistConfig, 
   FLUSH,
   REHYDRATE,  PAUSE, PERSIST, PURGE, REGISTER,
   persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig: PersistConfig<any> = {
   key: 'root',
   storage: storage,
   whitelist: ['cart']
}

const rootReducer = combineReducers({
   cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => 
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         }
      })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
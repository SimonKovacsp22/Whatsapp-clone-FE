/** @format */

import profilesReducer from "../reducers/profileReducer"
import loginUserReducer from "../reducers/loginUserReducer"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      onError: (error) => {
        console.log(error)
      },
      secretKey: process.env.REACT_APP_KEY,
    }),
  ],
}

const combinedReducer = combineReducers({
  profile: profilesReducer,
  logUser: loginUserReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

export { store, persistor }

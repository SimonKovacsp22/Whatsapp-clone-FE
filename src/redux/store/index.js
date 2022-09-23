/** @format */

import profilesReducer from "../reducers/profileReducer"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import chatReducer from "../reducers/chatReducer"

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
  chat: chatReducer,
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

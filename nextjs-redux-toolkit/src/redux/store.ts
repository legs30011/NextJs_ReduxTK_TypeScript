//el estado apra que todos puedan leer
//definimos que vamos a leer mejor separamos 
//por caracteristicas asi que vaos a features
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Ajusta la ruta según tu estructura de carpetas

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//funcionq que emieza con use para usar
// y reutulizar tendro de react
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store'; // Ajusta la ruta según tu estructura de carpetas

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

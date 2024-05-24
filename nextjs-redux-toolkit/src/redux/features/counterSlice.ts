import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

//todo lo de aca equivale a =
// const [counter,setCounter]=useState(0)
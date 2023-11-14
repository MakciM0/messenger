import { TSubscriber, TMessage } from './../types/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { InitialSubscriber, nullSub } from "../const/initialState";



const MessegerSlice = createSlice({
  name: "messeger",
  initialState: {
    Subscribers: InitialSubscriber as TSubscriber[],
    CurrentSub: {} as TSubscriber

  },

  reducers: {
    SetCurrentSub: (state, action: PayloadAction<TSubscriber>) => {
      state.CurrentSub = action.payload
    },
    SendMessage: (state, action: PayloadAction<TMessage>) => {
      state.CurrentSub.messages.push(action.payload)
      let isFind = state.Subscribers.find((el) => el.name == state.CurrentSub.name)
      isFind.messages = state.CurrentSub.messages
    },
    NewSub: (state, action: PayloadAction<string>) => {
      let newSubItem: TSubscriber = {
        name: action.payload,
        messages: []
      }
      console.log(newSubItem)
      state.Subscribers.push(newSubItem)
    },
    DeleteSub: (state, action: PayloadAction<TSubscriber>) => {
      console.log(action.payload)
      state.Subscribers = state.Subscribers.filter((item) => item.name !== action.payload.name)
      if (state.Subscribers[0]) {
        state.CurrentSub = state.Subscribers[0]
      } else {
        state.CurrentSub = nullSub
      }
    },
  }
});

export const {
  SetCurrentSub,
  SendMessage,
  NewSub,
  DeleteSub,

} = MessegerSlice.actions;
export const selectCount = (state: RootState) => state.messages;
export default MessegerSlice.reducer;

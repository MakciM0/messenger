import { TSubscriber } from "../types/types";

export const InitialSubscriber: TSubscriber[] = [
  {
    name: 'sad',
    messages: [
      { value: 'Я тебе отправил', destination: true, time: '18:00', read: true },
      { value: 'Я принял', destination: false,time: '19:00', read: false}
    ],
    
  },
  {
    name: 'Alex',
    messages: [
      { value: 'asdasss', destination: true, time: '00:00', read: false },
      { value: 'asdasss', destination: true, time: '00:00', read: false },
    ]
  }
]

export const nullSub :TSubscriber ={
  name: '',
  messages: []
}
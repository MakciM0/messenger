export type TMessage = {
  value: string, // текст сообщения
  destination: boolean, // true - пользователь получил сообщение, false - отправил
  time: string,
  read : boolean
}

export type TSubscriber = { //Абонент
  name: string,
  messages: TMessage[] 
}
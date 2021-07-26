import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions';

// 引数として渡されるstateは前の状態
// actionにはタイプが渡ってくる

// action={
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します'
// }

// #before
// state =[]
// #after
// state =[
// {
// id:1,
// title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します'
// }
// ]

// #before
// state= [
// {id:1,title:"タイトル１",body:'ボディ１'}
// {id:2,title:"タイトル2",body:'ボディ2'}
// {id:3,title:"タイトル3",body:'ボディ3'}
// ]

// #after
// state=[
// {id:1,title:"タイトル１",body:'ボディ１'}
// {id:2,title:"タイトル2",body:'ボディ2'}
// {id:3,title:"タイトル3",body:'ボディ3'}
// {
//     id:4,
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します'
// }
// ]

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      //   元のstateを展開して、idを今作ったidとして残りのeventの要素(titleとbody)を展開したオブジェクトを作成
      // 新しい配列としてreturnする
      return [...state, { id: id, ...event }];
    //   省略可能;
    //   return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;

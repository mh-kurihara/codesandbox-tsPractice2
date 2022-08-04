//

// 別ファイルに定義した型指定を使用する
import { TodoType } from "./types/todo";

export const Todo = (
  //必要な項目だけ取り出す
  //  props: Pick<TodoType, "userId" | "title" | "completed">
  //または不要な項目を取り除く
  props: Omit<TodoType, "id">

  //  props: TodoType
) => {
  const { title, userId, completed = true } = props;
  const completeMark = completed ? "完" : "未";
  return <p>{`${completeMark} ${title}(ユーザID:${userId})`}</p>;
};

import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

// FCは暗黙でchildrenが引数として渡ってくる（ver18で修正） ⇒ それまではVFCを使う
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/** オプショナルチェイニング（?）NULLであればそれ以降のドットは処理しない */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

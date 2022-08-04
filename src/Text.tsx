import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// FCは暗黙でchildrenが引数として渡ってくる（ver18で修正） ⇒ それまではVFCを使う
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};

import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import styles from "./styles.module.css";

export default function Title(props: {
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
}) {
  return <h1 className={styles.title}>{props.children}</h1>;
}

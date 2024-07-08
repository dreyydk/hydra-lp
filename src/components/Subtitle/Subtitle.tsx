import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import styles from "./styles.module.css";

export default function Subtitle(props: {
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
  return <h2 className={styles.subtitle}>{props.children}</h2>;
}

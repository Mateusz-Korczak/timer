import styles from './Display.module.scss';

const Display = (props) => {
  return <div className={styles.display}>{props.children}</div>;
};

export default Display;

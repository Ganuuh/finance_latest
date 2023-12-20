import { Logo } from "./Logo";
import styles from "../styles/rotate.module.css";
export const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <Logo height="45px" text="30px" />
      <div className="w-fit h-fit flex justify-center gap-4 flex-col items-center">
        <div className={styles.circle}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
        </div>
        <p className="w-fit h-fit text-[#0F172A] text-[16px] font-semibold">
          Түр хүлээнэ үү...
        </p>
      </div>
    </div>
  );
};

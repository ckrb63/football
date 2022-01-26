import ClipLoader from "react-spinners/ClipLoader";
import style from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={style.spinner}>
      <ClipLoader size={35} />
    </div>
  );
};
export default Spinner;

import classNames from "classnames/bind";
import Button from "@/components/Button/";
import styles from "./AccountPreview.module.scss";
import images from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img className={cx("avatar")} src={images.userImg} alt="" />
        <Button primary>Follow</Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>Binhdevfe</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Binhdev</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M</strong>
          <span className={cx("label")}>Like</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;

import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import images from "@/assets/images";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img className={cx("avatar")} src={images.userImg} alt="" />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>Binhdevfe</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Binhdev</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;

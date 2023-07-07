import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "@/components/Popper";

import images from "@/assets/images";
import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

const renderPreview = (props) => {
  return (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );
};

function AccountItem() {
  return (
    <div>
      <Tippy delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;

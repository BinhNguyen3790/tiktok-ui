import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react"; //
import HeadlessTippy from "@tippyjs/react/headless"; //
import styles from "./Header.module.scss";
import images from "@/assets/images";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import Menu from "@/components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import { UploadIcon } from "@/components/Icons";
import Image from "@/components/Images";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyboard shortcut",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  });

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "ViewProfile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                  <UploadIcon />
                </button>
              </Tippy>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image src={images.userImg} className={cx("user-avatar")} alt="Nguyen Van A" />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

type DesktopNavRight = {
  ICON_SIZE: number;
  LANGUAGE_LINK: {
    SMALL_TEXT: string;
  };
  AUTH_LINK: {
    SMALL_TEXT: string;
    TEXT: string;
  };
  AUTH_LINK_LOGOUT: {
    SMALL_TEXT: string;
    TEXT: string;
  };
  CART_LINK: {
    TEXT: string;
  };
};

export const DESKTOP_NAV_RIGHT: DesktopNavRight = {
  ICON_SIZE: 26,
  LANGUAGE_LINK: {
    SMALL_TEXT: "Language",
  },
  AUTH_LINK: {
    SMALL_TEXT: "Welcome",
    TEXT: "Login / Register",
  },
  AUTH_LINK_LOGOUT: {
    SMALL_TEXT: " ",
    TEXT: "Logout",
  },
  CART_LINK: {
    TEXT: "Cart",
  },
};

export const SEARCHBAR = {
  SEARCHBAR_BUTTON_TEXT: "All",
};

type DesktopNavRight = {
  ICON_SIZE: number;
  LANGUAGE_LINK: {
    SMALL_TEXT: string;
  };
  AUTH_LINK: {
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
    TEXT: "Sign in / Register",
  },
  CART_LINK: {
    TEXT: "Cart",
  },
};

export const DELIVERY_LOCATION_AND_SEARCHBAR = {
  DELIVERY_SELECTION_BUTTON_TEXT: "Deliver to",
  DELIVERY_SELECTION_BUTTON_ICON_SIZE: 20,
  SEARCHBAR_BUTTON_TEXT: "All",
};

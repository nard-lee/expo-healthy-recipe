type Theme = {
  mode: string;
  colors: {
    bg_primary: string;
    bg_secondary: string;
    txt_col: string;
  };
};

const lightTheme: Theme = {
  mode: "light",
  colors: {
    bg_primary: "#fff",
    bg_secondary: "#e6e6e6",
    txt_col: "#333",
  },
};

const darkTheme: Theme = {
  mode: "dark",
  colors: {
    bg_primary: "#24293E",
    bg_secondary: "#1c2031",
    txt_col: "#fff",
  },
};

export { lightTheme, darkTheme };

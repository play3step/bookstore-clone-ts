export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface theme {
  name: ThemeName;
  colors: {
    // primary: string;
    // background: string;
    [key in ColorKey]: string;
  };
}

export const light: theme = {
  name: "light",
  colors: {
    primary: "brown",
    background: "lightgray",
    secondary: "blue",
    third: "green",
  },
};

export const dark: theme = {
  name: "dark",
  colors: {
    primary: "white",
    background: "black",
    secondary: "blue",
    third: "green",
  },
};

export const getTheme = (themeName: ThemeName): theme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};

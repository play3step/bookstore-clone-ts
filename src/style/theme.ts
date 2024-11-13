export type ThemeName = "light" | "dark";

export type HeadingSize = "large" | "medium" | "small";

export type ColorKey = "primary" | "background" | "secondary" | "third";

interface theme {
  name: ThemeName;
  colors: {
    // primary: string;
    // background: string;
    [key in ColorKey]: string;
  };
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
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
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
};

export const dark: theme = {
  ...light,
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

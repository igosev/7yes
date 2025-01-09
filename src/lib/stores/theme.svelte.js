const handleTheme = () => {
  const light = "light";
  const dark = "dark";

  let preferred = light;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    preferred = dark;
  }

  let themeSaved = localStorage.getItem("theme") || preferred;



  const applyTheme = (theme) => {
    document.firstElementChild.setAttribute("data-theme", theme);
  };
  applyTheme(themeSaved);

  let theme = $state({ value: themeSaved });

  return {
    get value() {
      return theme.value;
    },
    toggle: () => {
      theme.value = theme.value === dark ? light : dark;
      localStorage.setItem("theme", theme.value);
      applyTheme(theme.value);
    },
    light,
    dark
  };
};

export const theme = handleTheme();
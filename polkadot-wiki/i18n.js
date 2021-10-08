const defaultLocale = "en";

const locales = ["en", "zh-CN", "ru-RU", "vi-VN"];

const localeConfigs = {
  en: {
    label: "English",
  },
  "ru-RU": {
    label: "Русский",
  },
  "zh-CN": {
    label: "中文",
  },
  "vi-VN": {
    label: "Vietnamese",
  },
};

module.exports = {
  defaultLocale,
  locales,
  localeConfigs,
};

/**
 * Меню разделов приложения.
 */
const appSectionMenuLinks = [
  {
    title: "Библиотека",
    icon: "o_library_books",
    link: "/libs",
    linkName: "libs-books",
    color: "blue-8",
    tabs: [
      {
        title: "Книги",
        icon: "o_auto_stories",
        link: "/libs/books",
      },
      {
        title: "Авторы",
        icon: "o_groups",
        link: "/libs/authors",
      },
      {
        title: "Цитаты",
        icon: "o_format_quote",
        link: "/libs/cites",
      },
    ],
  },
  {
    title: "Фильмотека",
    icon: "o_movie",
    link: "/films",
    linkName: "films-index",
    color: "orange-9",
  },
  {
    title: "Картотека",
    icon: "o_dashboard_customize",
    link: "/cards",
    linkName: "cards-index",
    color: "red-8",
  },
  {
    title: "Биография",
    icon: "o_assignment_ind",
    link: "/bios",
    linkName: "bios-index",
    color: "teal-8",
  },
  {
    title: "Планирование",
    icon: "o_moving",
    link: "/plans",
    linkName: "plans-index",
    color: "indigo-7",
  },
];

/**
 * Меню пользовательского раздела.
 */
const profileMenuLinks = [
  {
    title: "Профиль",
    icon: "o_account_circle",
    link: "/user/profile",
    linkName: "user-profile",
    color: "secondary",
  },
  {
    title: "Настройки",
    icon: "o_settings",
    link: "/user/settings",
    linkName: "user-settings",
    color: "secondary",
  },
  {
    title: "Клуб",
    icon: "o_groups",
    link: "/user/club",
    linkName: "user-club",
    color: "secondary",
  },
  {
    title: "Выход",
    icon: "o_logout",
    link: "/user/logout",
    linkName: "user-logout",
    color: "secondary",
  },
];

/**
 * Меню гостевого раздела.
 */
const guestMenuLinks = [
  {
    title: "Войти",
    icon: "o_login",
    link: "/user/login",
    linkName: "user-login",
    color: "secondary",
  },
  {
    title: "Создать аккаунт",
    icon: "o_how_to_reg",
    link: "/user/register",
    linkName: "user-register",
    color: "secondary",
  },
];

/**
 * Меню раздела помощи.
 */
const helpMenuLinks = [
  {
    title: "О приложении",
    icon: "o_help",
    link: "/help",
    linkName: "help-index",
    color: "blue-8",
    tabs: [
      {
        title: "Библиотека - О разделе",
        icon: "o_library_books",
        link: "/help/libs",
      },
      {
        title: "Фильмотека - О разделе",
        icon: "o_movie",
        link: "/help/films",
      },
    ],
  },
];

export { appSectionMenuLinks, profileMenuLinks, guestMenuLinks, helpMenuLinks };

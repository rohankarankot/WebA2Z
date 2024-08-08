export const ROUTES = [
  { route: "/menu", name: "Menus" },
  { route: "/offers", name: "Offers" },
  { route: "/services", name: "Services" },
  {
    route: "",
    name: "more",
    isDropDown: true,
    moreRoutes: [
      { route: "/contact", name: "Contact" },
      { route: "/faq", name: "FAQ" },
    ],
  },
];

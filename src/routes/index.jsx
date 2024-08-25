export const ROUTES = [
  { route: "/menu", name: "Menus" },
  { route: "/offers", name: "Offers" },
  { route: "/services", name: "Services" },
  { route: "/cart", name: "Cart" },
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

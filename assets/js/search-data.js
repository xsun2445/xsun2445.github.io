// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-we-have-presented-our-work-at-t-mobile-s-headquarter-in-bonn-germany-and-won-the-t-mobile-challenge-most-engaging-presentation-award-2024",
          title: 'We have presented our work at T-Mobile’s headquarter in Bonn, Germany. And won...',
          description: "",
          section: "News",},{id: "news-we-will-be-presenting-a-demo-and-a-workshop-papaper-at-mobicom-2024-in-washington-d-c",
          title: 'We will be presenting a Demo and a Workshop papaper at Mobicom 2024...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

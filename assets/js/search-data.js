// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-xinghua-sun",
    title: "Xinghua Sun",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-polysight-towards-practical-bi-static-polarimetric-imaging-for-material-sensing",
      
        title: "POLySight: Towards Practical Bi-Static Polarimetric Imaging for Material Sensing",
      
      description: "A highly accurate bi-static and polarimetric SAR imaging system at mmWave frequency",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/polysight-blog/";
        
      },
    },{id: "post-muldar-unleashing-the-potential-of-distributed-cots-mmwave-radar-by-exploiting-cross-device-channels",
      
        title: "MulDar: Unleashing the Potential of Distributed COTS mmWave Radar by Exploiting Cross-Device Channels...",
      
      description: "A multi-static distributed mmWave radar imaging system with commodity-off-the-shelf radars.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/muldar-blog/";
        
      },
    },{id: "news-we-have-presented-our-work-raytrack-at-t-mobile-s-headquarter-in-bonn-germany-and-won-the-t-mobile-challenge-most-engaging-presentation-award-2024",
          title: 'We have presented our work RayTrack at T-Mobile’s headquarter in Bonn, Germany. And...',
          description: "",
          section: "News",},{id: "news-we-will-be-presenting-a-demo-and-a-workshop-paper-at-mobicom-2024-in-washington-d-c",
          title: 'We will be presenting a Demo and a Workshop paper at Mobicom 2024...',
          description: "",
          section: "News",},{id: "news-won-the-best-demo-award-sponsored-by-apple-at-the-uw-ece-research-showcase-2025",
          title: 'Won the Best Demo Award (sponsored by Apple) at the UW ECE Research...',
          description: "",
          section: "News",},{id: "news-passed-my-phd-qualification-exam",
          title: 'Passed my PhD Qualification Exam.',
          description: "",
          section: "News",},{id: "news-our-paper-polysight-towards-practical-bi-static-polarimetric-imaging-using-commodity-mmwave-radars-for-material-sensing-has-been-accepted-to-acm-ieee-sensys-2026",
          title: 'Our paper POLySight: Towards Practical Bi-Static Polarimetric Imaging using Commodity mmWave Radars for...',
          description: "",
          section: "News",},{id: "news-our-paper-muldar-unleashing-the-potential-of-distributed-cots-mmwave-radar-by-exploiting-cross-device-channels-has-been-accepted-to-acm-mobisys-2026",
          title: 'Our paper MulDar: Unleashing the Potential of Distributed COTS mmWave Radar by Exploiting...',
          description: "",
          section: "News",},{id: "projects-muldar",
          title: 'MulDar',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MulDar-Tutorial/";
            },},{
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

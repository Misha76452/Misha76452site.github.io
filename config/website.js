const meta = {
  // Metadata
  siteTitle: 'Misha 76452 - Creative Web Designer',
  siteDescription:
    'Misha 76452 - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Misha 76452',
  siteShortName: 'Misha 76452',
  siteUrl: 'https://misha76452site.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'misha',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;

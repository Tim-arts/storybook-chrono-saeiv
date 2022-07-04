export const BADGES = {
  DEFAULT: {
    styles: {
      backgroundColor: '#EDEFF5',
      color: '#474D66',
    },
    title: 'Défaut',
  },
  BETA: {
    styles: {
      backgroundColor: '#D6E0FF',
      color: '#2952CC',
    },
    title: 'Beta',
    tooltip: {
      title: 'This is Beta',
      desc: 'This component is still a work in progress and might receive updates frequently as well as behave strangely in certain circumstances',
      links: [
        {
          title: 'Read more',
          onClick: () => {
            alert('Thanks for the feedback!');
          },
        },
      ],
    },
  },
  STABLE: {
    styles: {
      backgroundColor: '#DCF2EA',
      color: '#317159',
    },
    title: 'Stable',
  },
  'NEEDS-REVISION': {
    styles: {
      backgroundColor: '#FFEFD2',
      color: '#66460D',
    },
    title: 'Besoin de révision',
  },
  OBSOLETE: {
    styles: {
      backgroundColor: '#F9DADA',
      color: '#7D2828',
    },
    title: 'Obsolète',
  },
  EXPERIMENTAL: {
    styles: {
      backgroundColor: '#E7E4F9',
      color: '#6E62B6',
    },
    title: 'Expérimental',
  },
};

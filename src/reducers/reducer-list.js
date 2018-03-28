export default function() {
  return {
    headers: {
      url: "headers",
      section: "Headers",
      tag: "h1",
      className: {
        H1: "ya-header ya-header_one",
        H2: "ya-header ya-header_two",
        H3: "ya-header ya-header_three",
        H4: "ya-header ya-header_four",
        H5: "ya-header ya-header_five",
        H6: "ya-header ya-header_six"
      }
    },
    typography: {
      url: "typography",
      section: "Typography",
      tag: "p",
      className: {
        smallText: "ya-small-text",
        baseText: "ya-base-text",
        mediumText: "ya-medium-text",
        largeText: "ya-large-text",
        xlargeText: "ya-xlarge-text",
        xxlargeText: "ya-xxlarge-text",
        hugeText: "ya-huge-text"
      }
    },
    buttons: {
      url: "buttons",
      section: "Buttons",
      tag: "a",
      className: {
        buttonPrimary: "ya-button ya-button_primary",
        buttonSecondary: "ya-button ya-button_secondary",
        buttonInvertedBlock: "ya-button ya-button_inverted-block"
      }
    },
    lists: {
      url: "lists",
      section: "Lists",
      tag: [["ul", "ol"], ["ul", "ol"], ["ul", "ol"], ["ul", "ol"]],
      className: {
        listItem: ["ya-list ya-ul-list", "ya-list ya-ol-list"],
        listLinks: [
          "ya-list ya-ul-list ya-ul-list_linked",
          "ya-list ya-ol-list ya-ol-list_linked"
        ],
        listAnchor: [
          "ya-list ya-ul-list ya-ul-list-anchor",
          "ya-list ya-ol-list ya-ol-list-anchor"
        ],
        listAnchorSmall: [
          "ya-list  ya-ul-list ya-ul-list-anchor ya-list-small",
          "ya-list  ya-ol-list ya-ol-list-anchor ya-list-small"
        ]
      }
    },
    links: {
      url: "links",
      section: "Links",
      tag: "a",
      className: {
        linkPrimary: "ya-link ya-primary-link",
        linkSecondary: "ya-link ya-secondary-link"
      }
    },
    icons: {
      url: "icons",
      section: "Icons",
      tag: "i",
      className: {
        "Hyphen Icon": "fas fa-minus",
        "Plus Icon": "fas fa-plus",
        "Asterisk Icon": "fas fa-asterisk",
        "Chevron Right Icon": "fas fa-chevron-right",
        "Chevron Down Icon": "fas fa-chevron-down",
        "Hash Icon": "fab fa-slack-hash",
        "Code Parenthesis": "fas fa-code",
        "Exclamation Icon": "fas fa-exclamation"
      }
    },
    featuredIcons: {
      url: "featured-icons",
      section: "Featured Icons",
      tag: "span",
      className: {
        "Flag Icon": "fas fa-flag fa-stack-1x fa-inverse ya-icon_featured",
        "Twitter Icon":
          "fab fa-twitter fa-stack-1x fa-inverse ya-icon_featured",
        "Terminal Icon":
          "fas fa-terminal fa-stack-1x fa-inverse ya-icon_featured",
        "Scale Icon":
          "fas fa-balance-scale fa-stack-1x fa-inverse ya-icon_featured"
      }
    },
    logo: {
      url: "logo",
      section: "Logo",
      tag: "img",
      className: {
        "Full color logo": {
          name: "ya-logo ya-logo_full",
          src: "../assets/images/logo.svg",
          alt: "logo"
        },
        "Full color logo negative": {
          name: "ya-logo ya-logo_negative",
          src: "../assets/images/logo_negative.svg",
          alt: "d"
        },
        "Two colors logo": {
          name: "ya-logo ya-logo_two-colors",
          src: "../assets/images/logo_two-colors.svg",
          alt: "f"
        },
        "Grey scale logo": {
          name: "ya-logo ya-logo_grey",
          src: "../assets/images/logo_grey-scale.svg",
          alt: "i"
        },
        "Black logo": {
          name: "ya-logo ya-logo_black",
          src: "../assets/images/logo_black.svg",
          alt: "k"
        }
      }
    },
    breadcrumbs: {
      url: "breadcrumbs",
      section: "Breadcrumbs",
      tag: "a",
      className: {
        breadcrumbsBar: "ya-breadcrumbs"
      }
    },
    table: {
      url: "table",
      section: "Table",
      tag: "table",
      className: {
        tableDisplay: "ya-table"
      }
    },
    colors: {
      url: "colors",
      section: "Colors",
      tag: "div",
      className: {
        "Main Color": "ya-main-color_background",
        "Secondary Color": "ya-secondary-color_background",
        "Tertiary Color": "ya-tertiary-color_background",
        "Complementary Color": "ya-complementary-color_background",
        "Desaturated Color": "ya-desaturated-color_background",
        "Background Color": "ya-background-color_background"
      }
    },
    highlights: {
      url: "highlights",
      section: "Highlights",
      tag: "div",
      className: {
        "Highlight Module Right": "ya-highlight-module ya-highlight-right",
        "Highlight Module Left": "ya-highlight-module ya-highlight-left"
      }
    },
    quote: {
      url: "quote",
      section: "Quote",
      tag: "p",
      className: {
        smallTextClass: "ya-small-button",
        mediumTextClass: "ya-medium-button",
        largeTextClass: "ya-large-button",
        xlargeTextClass: "ya-xlarge-button"
      }
    },
    pageSample: {
      url: "page-sample",
      section: "Page Sample",
      tag: "p",
      className: {
        smallTextClass: "ya-small-button",
        mediumTextClass: "ya-medium-button",
        largeTextClass: "ya-large-button",
        xlargeTextClass: "ya-xlarge-button"
      }
    }
  };
}

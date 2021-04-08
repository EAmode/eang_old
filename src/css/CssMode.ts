
import { css } from 'lit-element'

export const autocomplete = css`
`
export const button = css` .ea-button {
    appearance: none;
    align-items: center;
    background: var(--ea-background, var(--ea-button-background));
    border: var(
      --ea-border,
      var(--ea-button-border, 0.1em solid var(--ea-color-1-dark))
    );
    border-radius: var(
      --ea-border-radius,
      var(--ea-button-border-radius, 0.1em)
    );
    color: var(--ea-color, var(--ea-button-color));
    cursor: pointer;
    display: flex;
    font-family: var(--ea-font-1-family);
    font-size: calc(var(--ea-sizer) * 1rem);
    padding: calc(var(--ea-spacer) * 0.375em) calc(var(--ea-spacer) * 1em);
    margin: 0;
    text-decoration: none;
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
    justify-content: center;
    user-select: none;
  }

    .ea-button[primary] {
      background: var(--ea-button-background, var(--ea-color-1b));
      color: var(--ea-color, var(--ea-button-color, var(--ea-text-color-light)));
      border: var(
        --ea-border,
        var(--ea-button-border, 0.1em solid var(--ea-color-1a))
      );
    }

    .ea-button[primary]:hover:not(:active) {
        background: var(
          --ea-background,
          var(--ea-button-background, var(--ea-color-1a))
        );
      }

    .ea-button[lg] {
      --ea-sizer: 1.2;
    }

    .ea-button[outline] {
      background: var(--ea-button-background, transparent);
      color: var(--ea-text-color);
      border-color: var(--ea-color-1);
    }

    .ea-button[flat] {
      background: var(--ea-background-2, transparent);
      border-color: rgba(0, 0, 0, 0);
      color: var(--ea-text-color);
    }

    .ea-button:active,
    .ea-button[active],
    .ea-button.active {
      background: var(
        --ea-background,
        var(--ea-button-background, var(--ea-color-1b))
      );
      text-decoration: none;
    }

    .ea-button[disabled],
    .ea-button:disabled,
    .ea-button.disabled {
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
    }

    .ea-button:hover:not(:active) {
      background: var(
        --ea-background,
        var(--ea-button-background, var(--ea-color-1-light))
      );
    }

 .ea-button-icon {
    font-size: calc(var(--ea-sizer) * 1rem);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.375em;
    height: 2em;
    border-radius: 0.125em;
    user-select: none;
    outline: transparent;
    color: var(--ea-color, var(--ea-button-color, inherit));

    text-align: center;
  }

.ea-button-icon:active,
    .ea-button-icon[active],
    .ea-button-icon.active {
      background: var(
        --ea-background-active,
        var(--ea-button-background-active, var(--ea-color-grey))
      );
    }

.ea-button-icon[disabled],
    .ea-button-icon:disabled,
    .ea-button-icon.disabled {
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
    }

.ea-button-icon:hover:not(:active) {
      background: var(
        --ea-background-hover,
        var(--ea-button-background-hover, var(--ea-color-grey-light))
      );
      box-shadow: var(--ea-box-shadow);
    }
`
export const card = css` .ea-card {
      font-size: calc(var(--ea-sizer) * 1rem);
      background: var(
        --ea-background,
        var(--ea-card-background, var(--ea-background-1))
      );
      border: var(
        --ea-border,
        var(--ea-card-border, var(--ea-border-1))
      );
      color: var(--ea-color, var(--ea-card-color, inherit));
      width: 100%;
      display: flex;
      flex-direction: column;
      height: fit-content;
    }
  
      .ea-card[grid] {
        --ea-card-grid-template: var(
          --ea-card-grid-template,
          'ea-card-header' 'ea-card-content' 'ea-card-footer'
        );
  
        display: grid;
        grid-template: var(--ea-card-grid-template);
      }
  
      .ea-card[grid] > .ea-card-header {
          grid-area: ea-card-header;
        }
  
      .ea-card[grid] > .ea-card-content {
          grid-area: ea-card-content;
        }
  
      .ea-card[grid] > .ea-card-footer {
          grid-area: ea-card-footer;
        }
  
      .ea-card .ea-card-header {
        border-bottom: var(
          --ea-border,
          var(--ea-card-header-border, var(--ea-border-1))
        );
        background: transparent;
        color: var(--ea-color, var(--ea-card-header-color, inherit));
        padding: 0 calc(var(--ea-spacer) * 1em);
      }
  
      .ea-card .ea-card-header [content] {
          flex-grow: 1;
          display: flex;
        }
  
      .ea-card .ea-card-header[grid] {
          --ea-card-header-grid-template: var(
            --ea-card-header-grid-template,
            'header section aside' / 1fr 3fr 1fr
          );
          display: grid;
          grid-template: var(--ea-card-header-grid-template);
        }
  
      .ea-card .ea-card-content {
        padding: calc(var(--ea-spacer) * 1em);
        background: transparent;
        color: var(--ea-color, var(--ea-card-content-color, inherit));
      }
  
      .ea-card .ea-card-content[flex-center] {
          align-items: center;
          justify-content: space-between;
        }
  
      .ea-card .ea-card-content[flex-end] {
          align-items: flex-end;
          justify-content: space-between;
        }
  
      .ea-card .ea-card-content[flex-start] {
          align-items: flex-start;
          justify-content: space-between;
        }
  
      .ea-card .ea-card-content[grid] {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
        }
  
      .ea-card .ea-card-footer {
        margin-top: calc(var(--ea-spacer) * 0.7em);
        background: transparent;
        border-top: var(
          --ea-border,
          var(--ea-card-footer-border, var(--ea-border-1))
        );
        padding: calc(var(--ea-spacer) * 1em);
      }
  
      .ea-card .ea-card-footer[grid] {
          display: grid;
          grid-template-columns: var(
            --ea-card-footer-grid,
            'header section aside' / 1fr 3fr 1fr
          );
        }
`
export const fonts = css`@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Bold.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Bold.woff') format('woff'),
    url('../assets/fonts/Montserrat-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Black.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Black.woff') format('woff'),
    url('../assets/fonts/Montserrat-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('Montserrat-BlackItalic.woff2') format('woff2'),
    url('Montserrat-BlackItalic.woff') format('woff'),
    url('Montserrat-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-ExtraBold.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-ExtraBold.woff') format('woff'),
    url('../assets/fonts/Montserrat-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-ExtraLightItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-ExtraLightItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-ExtraBoldItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-ExtraBoldItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-ExtraBoldItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-ExtraLight.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-ExtraLight.woff') format('woff'),
    url('../assets/fonts/Montserrat-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Italic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Italic.woff') format('woff'),
    url('../assets/fonts/Montserrat-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-BoldItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-BoldItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Medium.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Medium.woff') format('woff'),
    url('../assets/fonts/Montserrat-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-LightItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-LightItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-SemiBold.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-SemiBold.woff') format('woff'),
    url('../assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-MediumItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-MediumItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Regular.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Regular.woff') format('woff'),
    url('../assets/fonts/Montserrat-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Light.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Light.woff') format('woff'),
    url('../assets/fonts/Montserrat-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-SemiBoldItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-SemiBoldItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Thin.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-Thin.woff') format('woff'),
    url('../assets/fonts/Montserrat-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-ThinItalic.woff2') format('woff2'),
    url('../assets/fonts/Montserrat-ThinItalic.woff') format('woff'),
    url('../assets/fonts/Montserrat-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Regular.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Regular.woff') format('woff'),
    url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Bold.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Bold.woff') format('woff'),
    url('../assets/fonts/Roboto-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-BlackItalic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-BlackItalic.woff') format('woff'),
    url('../assets/fonts/Roboto-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Black.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Black.woff') format('woff'),
    url('../assets/fonts/Roboto-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Light.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Light.woff') format('woff'),
    url('../assets/fonts/Roboto-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-LightItalic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-LightItalic.woff') format('woff'),
    url('../assets/fonts/Roboto-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-MediumItalic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-MediumItalic.woff') format('woff'),
    url('../assets/fonts/Roboto-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-BoldItalic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-BoldItalic.woff') format('woff'),
    url('../assets/fonts/Roboto-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Medium.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Medium.woff') format('woff'),
    url('../assets/fonts/Roboto-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Italic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Italic.woff') format('woff'),
    url('../assets/fonts/Roboto-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-Thin.woff2') format('woff2'),
    url('../assets/fonts/Roboto-Thin.woff') format('woff'),
    url('../assets/fonts/Roboto-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/fonts/Roboto-ThinItalic.woff2') format('woff2'),
    url('../assets/fonts/Roboto-ThinItalic.woff') format('woff'),
    url('../assets/fonts/Roboto-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
`
export const icons = css`
`
export const input = css`
`
export const layout = css` ea-layout {
    font-size: calc(var(--ea-sizer) * 1rem);
    display: grid;
    height: 100vh;
    margin: 0;

    color: var(--ea-color, var(--ea-layout-color, var(--ea-text-color-1)));

    overflow: hidden;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'drawer toolbar'
      'drawer body';
  }

    ea-layout[toolbar-top] {
      grid-template-areas:
        'toolbar toolbar'
        'drawer body';
    }

    ea-layout[draweroverlay='true'] {
      grid-template-areas:
        'toolbar toolbar'
        'body body';
    }

    ea-layout[draweroverlay='true'] ea-drawer {
        grid-row: 1;
        grid-column: 1;
        z-index: 1000000;
      }

    ea-layout[draweroverlay='true'] div[overlay] {
        grid-row: 2;
        grid-column: 2;
        background: black;
        opacity: 0.5;
        z-index: 1000000;
      }

    ea-layout[toolbar-top][draweroverlay='true'] ea-drawer {
        grid-row: 2/3;
      }

 .ea-toolbar {
    font-size: calc(var(--ea-sizer) * 1rem);
    color: var(--ea-color, var(--ea-toolbar-color, inherit));
    height: calc(
      var(--ea-spacer) * var(--ea-sizer) * var(--ea-toolbar-height, 4em)
    );
    padding: var(--ea-padding, var(--ea-toolbar-padding));
    background: var(
      --ea-background,
      var(--ea-toolbar-background, var(--ea-background-1))
    );
    display: flex;
    align-items: center;
    grid-area: toolbar;
  }

.ea-toolbar[shadow] {
      box-shadow: 0em calc(var(--ea-sizer) * 0.1em) 0.4em 0 rgba(0, 0, 0, 0.3);
      /* box-shadow:  inset 0 -3px 0 0 rgba(0, 0, 0, 0.3); */
      z-index: 1;
    }

 .ea-drawer {
    color: var(--ea-color, var(--ea-drawer-color, inherit));
    grid-area: drawer;
    display: flex;
    flex-direction: column;
    width: var(--ea-drawer-width);
    padding: var(--ea-padding, var(--ea-drawer-padding));
    background: var(
      --ea-background,
      var(--ea-drawer-background, var(--ea-background-1))
    );
    -webkit-tap-highlight-color: transparent;
    overflow: auto;
  }

.ea-drawer[resizable] {
      resize: horizontal;
      overflow: auto;
    }

.ea-drawer[state='closed'] {
      width: 0;
      display: none;
    }

 .ea-body {
    display: flex;
    flex-direction: column;
    font-size: calc(var(--ea-sizer) * 1rem);
    grid-area: body;
    overflow: auto;
    overflow-x: inherit;
    color: var(--ea-color, var(--ea-body-color, inherit));
    padding: var(--ea-padding, var(--ea-body-padding));
  }

 .ea-main {
    flex: 1 0 auto;
    background: var(
      --ea-background,
      var(--ea-main-background, var(--ea-background-2))
    );
  }

 .ea-footer {
    background: var(
      --ea-background,
      var(--ea-footer-background, var(--ea-background-1))
    );
    width: var(--ea-footer-width, 100%);
    padding: var(--ea-padding, var(--ea-footer-padding));
  }`
export const list = css`
`
export const markdown = css`
`
export const nav = css`.ea-nav ul {
      display: flex;
      list-style-type: none;
      font-size: calc(var(--ea-sizer) * 1rem);
      color: var(--ea-color, var(--ea-nav-color, inherit));
      padding-inline-start: 0;
      margin: 0;
    }
    .ea-nav a {
      padding: calc(var(--ea-spacer) * 0.4em) calc(var(--ea-spacer) * 0.8em)
        calc(var(--ea-spacer) * 0.4em) calc(var(--ea-spacer) * 0.8em);
      display: block;
      text-decoration: none;
      color: inherit;
    }
    .ea-nav li:hover {
        color: var(--ea-hover-color, var(--ea-nav-hover-color, inherit));
      }
    .ea-nav.nav-pills li:hover {
          background: var(
            --ea-background-hover,
            var(
              --ea-nav-background-hover,
              var(--ea-color-1-light, var(--ea-color-grey-light))
            )
          );
        }
    .ea-nav.nav-pills li:active,
        .ea-nav.nav-pills li[active],
        .ea-nav.nav-pills li.active {
          background: var(
            --ea-background-active,
            var(--ea-nav-background-active, var(--ea-color-1))
          );
          font-weight: 500;
        }
`
export const panel = css`
`
export const table = css`
`
export const tabs = css`
`
export const themepicker = css`
`
export const tooltip = css`
`
export const utilities = css`
`
export const variables = css`.mode {
  /* Base Colors */
  --ea-color-1a: hsl(223, 40%, 28%);
  --ea-color-1: hsl(223, 40%, 43%);
  --ea-color-1b: hsl(223, 40%, 63%);

  --ea-color-2a: hsl(223, 40%, 18%);
  --ea-color-2: hsl(223, 40%, 28%);
  --ea-color-2b: hsl(223, 40%, 38%);

  --ea-color-3: hsl(0, 0%, 96%);
  --ea-color-3-dark: hsl(0, 0%, 86%);

  /* Accent Colors */
  --ea-color-accent-1: #6a9c45;
  --ea-color-accent-2: #0078d4;

  /* Semantic Colors */
  --ea-color-success: #5bb95b;
  --ea-color-success-dark: #438a43;
  --ea-color-info: #5ac1de;
  --ea-color-warning: #f1ae4e;
  --ea-color-danger: #d9534f;
  --ea-color-error: #d9534f;

  --ea-color-grey-dark: hsl(0, 0%, 70%);
  --ea-color-grey: hsl(0, 0%, 80%);
  --ea-color-grey-light: hsl(0, 0%, 90%);
  --ea-color-striped: rgba(139, 184, 232, 1);

  --ea-color-disabled: hsl(0, 0%, 45%);

  /* Text Colors */
  --ea-text-color-light: hsl(0, 0%, 96%);
  --ea-text-color-1: hsl(0, 0%, 10%);
  --ea-text-color-2: hsl(0, 0%, 96%);

  /* Backgrounds */
  --ea-background-1: hsl(0, 0%, 100%);
  --ea-background-2: hsl(231, 33%, 96%);

  --ea-background-transparent-1: hsla(0, 0%, 100%, 0.9);

  /* Borders */
  --ea-border-1: 0.0625em solid hsla(0, 0%, 70%, 0.5);

  /* Fonts & Typography */
  --ea-font-1-family: 'Roboto', sans-serif;
  --ea-font-1-style: normal;
  --ea-font-1-weight: 400;

  /* Utilities */
  --ea-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  font-family: var(--ea-font-1-family);
  font-style: var(--ea-font-1-style);
  font-weight: var(--ea-font-1-weight);
  color: var(--ea-text-color-1);
}

.mode[data-color-scheme='dark'] {
  --ea-color-1a: hsl(223, 40%, 63%);
  --ea-color-1b: hsl(223, 40%, 28%);

  --ea-text-color-1: hsl(0, 0%, 96%);
  --ea-text-color-2: hsl(0, 0%, 20%);

  --ea-background-transparent-1: hsla(0, 0%, 5%, 0.9);

  --ea-color-grey: hsl(0, 0%, 30%);
  --ea-color-grey-light: hsl(0, 0%, 20%);

  --ea-background-1: hsl(0, 0%, 5%);
  --ea-background-2: hsl(0, 0%, 10%);

  --ea-box-shadow: 0 4px 12px rgba(255, 255, 255, 0.5);
}
`


import { css } from 'lit'

export const css_mode_ea_autocomplete = css`
`
export const css_mode_ea_button = css` .ea-button {
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
export const css_mode_ea_card = css` .ea-card {
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
export const css_mode_ea_fonts = css`@font-face {
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
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYNNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoadNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYdNZQyQ.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEobtNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYtNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoY9NZQyQ.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEobdNZ.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAgM9UvI.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLCwM9UvI.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAwM9UvI.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDAM9UvI.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAAM9UvI.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAQM9UvI.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDwM9.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYNNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoadNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYdNZQyQ.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYobtNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYtNZQyQ.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoY9NZQyQ.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYobdNZ.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCkYb8td.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCAYb8td.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCgYb8td.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCcYb8td.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCsYb8td.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCoYb8td.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCQYbw.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19-7DRs5.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-1967DRs5.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19G7DRs5.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-1927DRs5.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19y7DRs5.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCkYb8td.woff2)
    format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCAYb8td.woff2)
    format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCgYb8td.woff2)
    format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCcYb8td.woff2)
    format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCsYb8td.woff2)
    format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCoYb8td.woff2)
    format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYbw.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
`
export const css_mode_ea_icons = css`
`
export const css_mode_ea_input = css` .ea-form-actions {
    margin: calc(var(--ea-spacer) * 0.2em) calc(var(--ea-spacer) * 0.4em)
      calc(var(--ea-spacer) * 0.4em) calc(var(--ea-spacer) * 0.4em);
  }
 .ea-validation-error {
    font-size: calc(var(--ea-sizer) * 0.8rem);
    color: var(--ea-color-error);
  }
 .ea-form-field {
    display: grid;
    align-items: center;
    margin: calc(var(--ea-spacer) * 0.2em) calc(var(--ea-spacer) * 0.4em)
      calc(var(--ea-spacer) * 0.4em) calc(var(--ea-spacer) * 0.4em);
  }
.ea-form-field > label {
      margin: 0 0 0 calc(var(--ea-spacer) * 0.4em);
    }
.ea-form-field > input {
      font-size: calc(var(--ea-sizer) * 1rem);
      border: 0.1em solid var(--ea-color-grey-dark);
      padding: 0.35em;
      border-radius: 0.15em;
      width: 100%;
    }
.ea-form-field > input.ng-dirty.ng-invalid,
      .ea-form-field > input.invalid {
        border: 0.1em solid var(--ea-color-error);
      }
.ea-form-field > input[type='color'] {
      padding: 0.05em;
      margin: calc(var(--ea-spacer) * 0.5em);
      font-size: initial;
      border-radius: 0.15em;
    }
.ea-form-field > input:hover {
      border-color: var(--ea-color-1);
    }
.ea-form-field > textarea {
      font-size: calc(var(--ea-sizer) * 1rem);
      border: 0.1em solid var(--ea-color-grey-dark);
      padding: 0.35em;
      border-radius: 0.15em;
      min-height: calc(var(--ea-spacer) * 5em);
      min-width: calc(var(--ea-spacer) * 15em);
    }
.ea-form-field > textarea:hover {
      border-color: var(--ea-color-1);
    }
.ea-form-field > input[type='radio'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      width: 5%;
      height: 40%;
      padding: 3px;
      background-clip: content-box;
      border: 1px solid var(--ea-color-grey);
      background-color: var(--ea-color-grey-light);
      border-radius: 50%;
    }
.ea-form-field > input[type='radio']:checked {
      background-color: var(--ea-color-1);
    }
.ea-form-field > input[type='radio'][disabled] {
      background-color: var(--ea-color-disabled);
    }
.ea-form-field > .ea-radio-item {
      display: inline-block;
      position: relative;
      padding: 0 6px;
      margin: 10px 0 0;
    }
.ea-form-field > .ea-radio-item > input[type='radio'] {
        display: none;
      }
.ea-form-field > .ea-radio-item > label:before {
        content: ' ';
        display: inline-block;
        position: relative;
        top: 5px;
        margin: 0 5px 0 0;
        width: 1em;
        height: 1em;
        border-radius: 11px;
        border: 2px solid var(--ea-color-1);
        background-color: transparent;
      }
.ea-form-field > .ea-radio-item > [disabled] + label:before {
        border: 2px solid var(--ea-color-disabled);
      }
.ea-form-field > .ea-radio-item > [disabled] + label {
        color: var(--ea-color-grey-dark);
      }
.ea-form-field > .ea-radio-item > input[type='radio']:checked + label:after {
        border-radius: 11px;
        width: 12px;
        height: 12px;
        position: absolute;
        top: 9px;
        left: 10px;
        content: ' ';
        display: block;
        background: #004c97;
      }
.ea-form-field > input[type='range'] {
      background: transparent;
      font-size: calc(var(--ea-sizer) * 1rem);
      padding: 0.35em;
      -webkit-appearance: none;
      margin: calc(var(--ea-spacer) * 0.5em) 0;
      width: 100%;
      border: none;
    }
.ea-form-field > input[type='range']:focus {
      outline: none;
    }
.ea-form-field > input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: calc(var(--ea-sizer) * 7.5px);
      cursor: pointer;
      animate: 0.2s;
      box-shadow: 0px 0px 0px var(--ea-color-2), 0px 0px 0px var(--ea-color-2);
      background: var(--ea-color-3);
      border-radius: 25px;
      border: 0.1em solid var(--ea-color-2);
    }
.ea-form-field > input[type='range']::-webkit-slider-thumb {
      box-shadow: 0px 0px 0px var(--ea-color-2), 0px 0px 0px var(--ea-color-2);
      border: 0px solid var(--ea-color-2);
      height: calc(var(--ea-sizer) * 17px);
      width: calc(var(--ea-sizer) * 8px);
      border-radius: 7px;
      background: var(--ea-color-1);
      cursor: pointer;
      -webkit-appearance: none;
      margin: calc(var(--ea-sizer) * -5px) 0 0 0;
    }
.ea-form-field > input[type='checkbox'] {
      margin: calc(var(--ea-spacer) * 1.5em);
      position: relative;
      cursor: pointer;
    }
.ea-form-field > input[type='checkbox']:before {
      content: '';
      display: block;
      position: absolute;
      width: calc(var(--ea-sizer) * 16px);
      height: calc(var(--ea-sizer) * 16px);
      top: 0;
      left: 0;
      border: 2px solid var(--ea-color-1);
      border-radius: 3px;
      background-color: white;
    }
.ea-form-field > input[type='checkbox'][disabled]:before {
      border-color: var(--ea-color-disabled);
    }
.ea-form-field > input[type='checkbox']:checked:after {
      content: '';
      display: block;
      width: calc(var(--ea-sizer) * 5px);
      height: calc(var(--ea-sizer) * 10px);
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: calc(var(--ea-sizer) * 2px);
      left: calc(var(--ea-sizer) * 6px);
    }
.ea-form-field > input[type='checkbox'][disabled] + label {
      color: var(--ea-color-disabled);
    }
.ea-form-field > select {
      font-size: calc(var(--ea-sizer) * 1rem);
      border: 0.1em solid var(--ea-color-grey-dark);
      padding: 0.35em;
      border-radius: 0.15em;
      width: 100%;
    }
 .checkbox-switch {
    margin: calc(var(--ea-sizer) * 0.5em);
  }
.checkbox-switch > label {
      margin: 0 0 0 calc(var(--ea-spacer) * 0.5em);
    }
.checkbox-switch > input[type='checkbox'] {
      margin: calc(var(--ea-spacer) * 0.5em) calc(var(--ea-spacer) * 0.5em);
      position: relative;
      background: var(--ea-color-3);
      width: calc(var(--ea-sizer) * 45px);
      height: calc(var(--ea-sizer) * 18px);
      -webkit-appearance: initial;
      border-radius: calc(var(--ea-sizer) * 20px);
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      outline: none;
      font-size: calc(var(--ea-sizer) * 14px);
      font-family: Trebuchet, Arial, sans-serif;
      font-weight: bold;
      cursor: pointer;
      border: 1px solid var(--ea-color-1);
      animation-name: blue-to-white;
      animation-duration: 1.5s;
    }
.checkbox-switch > input[type='checkbox']:after {
      position: absolute;
      top: 5%;
      display: block;
      line-height: calc(var(--ea-sizer) * 32px);
      width: 35%;
      height: 90%;
      background: var(--ea-color-3);
      text-align: center;
      transition: all 0.3s ease-in 0s;
      color: black;
      border: var(--ea-color-1-light) 1px solid;
      border-radius: 3px;
    }
.checkbox-switch > input[type='checkbox']:after {
      left: 4%;
      color: var(--ea-text-color-2);
      background: var(--ea-color-1);
      border-radius: calc(var(--ea-sizer) * 30px);
      content: '';
    }
.checkbox-switch > input[type='checkbox'][disabled]:after {
      background: var(--ea-color-grey);
      color: var(--ea-color-disabled);
    }
.checkbox-switch > input[type='checkbox']:checked:after {
      color: var(--ea-text-color);
      background: var(--ea-color-3);
      left: 62%;
      border-radius: calc(var(--ea-sizer) * 20px);
      content: '';
    }
.checkbox-switch > input[type='checkbox']:checked {
      background: var(--ea-color-1);
      animation-name: white-to-blue;
      animation-duration: 1.5s;
    }
@keyframes white-to-blue {
      from {
        background-color: var(--ea-color-3);
      }
      to {
        background-color: var(--ea-color-1);
      }
    }
@keyframes blue-to-white {
      from {
        background: var(--ea-color-1);
      }
      to {
        background: var(--ea-color-3);
      }
    }
`
export const css_mode_ea_layout = css` :host(ea-layout),
   .ea-layout {
    font-size: calc(var(--ea-sizer) * 1rem);
    display: grid;
    height: 100vh;
    margin: 0;

    color: var(--ea-color, var(--ea-layout-color, var(--ea-text-color-1)));

    overflow: hidden;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'toolbar toolbar'
      'drawer body';
  }
 :host(ea-layout[drawerstate='closed']),
   .ea-layout[drawerstate='closed'] {
    grid-template-columns: 1fr;
  }
 .ea-toolbar {
    grid-area: toolbar;
    font-size: calc(var(--ea-sizer) * 1rem);
    color: var(--ea-color, var(--ea-toolbar-color, inherit));
    height: calc(
      var(--ea-spacer) * var(--ea-sizer) * var(--ea-toolbar-height, 100%)
    );
    padding: var(--ea-padding, var(--ea-toolbar-padding));
    background: var(
      --ea-background,
      var(--ea-toolbar-background, var(--ea-background-1))
    );
    display: flex;
    align-items: center;
  }
.ea-toolbar[border] {
      z-index: 1;
      border-bottom: 1px solid lightgrey;
    }
.ea-toolbar[shadow] {
      box-shadow: 0em calc(var(--ea-sizer) * 0.1em) 0.4em 0 rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
 .ea-drawer {
    grid-area: drawer;
    color: var(--ea-color, var(--ea-drawer-color, inherit));
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
 .ea-main {
    overflow: auto;
    background: var(
      --ea-background,
      var(--ea-main-background, var(--ea-background-2))
    );
  }
 .ea-body {
    display: flex;
    flex-direction: column;
    font-size: calc(var(--ea-sizer) * 1rem);
    grid-area: body;

    color: var(--ea-color, var(--ea-body-color, inherit));
    padding: var(--ea-padding, var(--ea-body-padding));
  }
 .ea-footer {
    background: var(
      --ea-background,
      var(--ea-footer-background, var(--ea-background-1))
    );
    width: var(--ea-footer-width, 100%);
    padding: var(--ea-padding, var(--ea-footer-padding));
  }
`
export const css_mode_ea_link = css` .ea-link {
      color: var(--ea-color, var(--ea-link-color,var(--ea-color-1a)));
  }
      .ea-link:hover {
        color: var(--ea-color, var(--ea-link-color-hover,var(--ea-color-1)));

      }
`
export const css_mode_ea_list = css`
`
export const css_mode_ea_markdown = css`
`
export const css_mode_ea_nav = css`.ea-nav ul {
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
export const css_mode_ea_panel = css`
`
export const css_mode_ea_table = css`
`
export const css_mode_ea_tabs = css`
`
export const css_mode_ea_themepicker = css`
`
export const css_mode_ea_tooltip = css`
`
export const css_mode_ea_utilities = css`
`
export const css_mode_ea_variables = css`.mode {
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

  --ea-font-2-family: 'Roboto Condensed', sans-serif;
  --ea-font-2-style: normal;
  --ea-font-2-weight: 300;

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

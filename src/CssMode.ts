import { css } from 'lit-element';

export const button = css`
  button.ea-button,
  input.ea-button {
    appearance: none;
    align-items: center;
    background: var(
      --ea-background,
      var(--ea-button-background, var(--ea-background-1))
    );
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
    font-weight: 600;
    padding: calc(var(--ea-spacer) * 0.375em) calc(var(--ea-spacer) * 1em);
    margin: 0;
    text-decoration: none;
    transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
    justify-content: center;
    user-select: none;
  }

  button.ea-button[primary],
  input.ea-button[primary] {
    background: var(--ea-button-background, var(--ea-color-1));
    color: var(--ea-color, var(--ea-button-color, var(--ea-text-color-2)));
  }

  button.ea-button[outline],
  input.ea-button[outline] {
    background: var(--ea-button-background, transparent);
    color: var(--ea-text-color);
    border-color: var(--ea-color-1);
  }

  button.ea-button[flat],
  input.ea-button[flat] {
    background: var(--ea-background-2, transparent);
    border-color: rgba(0, 0, 0, 0);
    color: var(--ea-text-color);
  }

  button.ea-button:active,
  button.ea-button[active],
  button.ea-button.active,
  input.ea-button:active,
  input.ea-button[active],
  input.ea-button.active {
    background: var(
      --ea-background,
      var(--ea-button-background, var(--ea-color-1-dark))
    );
    color: var(--ea-color, var(--ea-button-color, var(--ea-text-color-2)));
    text-decoration: none;
  }

  button.ea-button[disabled],
  button.ea-button:disabled,
  button.ea-button.disabled,
  input.ea-button[disabled],
  input.ea-button:disabled,
  input.ea-button.disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  button.ea-button:hover:not(:active),
  input.ea-button:hover:not(:active) {
    background: var(
      --ea-background,
      var(--ea-button-background, var(--ea-color-1-light))
    );
    box-shadow: var(--ea-box-shadow);
  }

  button.ea-button-icon {
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

  button.ea-button-icon:active,
  button.ea-button-icon[active],
  button.ea-button-icon.active {
    background: var(
      --ea-background-active,
      var(--ea-button-background-active, var(--ea-color-grey))
    );
  }

  button.ea-button-icon[disabled],
  button.ea-button-icon:disabled,
  button.ea-button-icon.disabled {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
  }

  button.ea-button-icon:hover:not(:active) {
    background: var(
      --ea-background-hover,
      var(--ea-button-background-hover, var(--ea-color-grey-light))
    );
    box-shadow: var(--ea-box-shadow);
  }
`;

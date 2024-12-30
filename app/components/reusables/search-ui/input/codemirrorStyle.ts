// StyledComponents.js
import styled from 'styled-components';
import { theme } from 'antd';

const { useToken } = theme;

// CodeMirrorQueryInput.module.scss
const CodeMirrorQueryInput = {
  Root: styled.div`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;

    .cm-editor {
      &.cm-focused {
        outline: none;

        .sg-query-filter-placeholder {
          display: inline;
        }

        .sg-query-filter-placeholder,
        .sg-query-filter-active {
          background-color: ${({ theme }) => theme.gray02};

          .theme-dark & {
            background-color: ${({ theme }) => theme.gray08};
          }
        }
      }

      .sg-query-filter-placeholder {
        display: none;
      }

      .cm-scroller {
        overflow-x: hidden;
      }

      .cm-content {
        &:focus-visible {
          box-shadow: none;
        }

        @media (--xs-breakpoint-down) {
          white-space: pre-wrap;
          white-space: break-spaces;
          word-break: break-word;
          overflow-wrap: anywhere;
          flex-shrink: 1;
        }
      }

      .cm-placeholder {
        display: inline;
        word-break: break-all;
      }

      .cm-tooltip-autocomplete {
        padding: 0;
        color: ${({ theme }) => theme.searchQueryTextColor};
        background-color: ${({ theme }) => theme.colorBg1};
        max-width: 70vw;
        margin-top: ${({ theme }) => theme.space.xs};

        > ul {
          font-size: ${({ theme }) => theme.codeFontSize};
          font-family: ${({ theme }) => theme.codeFontFamily};
          max-height: 15rem;

          > li {
            align-items: center;
            box-sizing: content-box;
            padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
            display: flex;
            height: 1.25rem;

            svg {
              flex-shrink: 0;

              path {
                fill: ${({ theme }) => theme.searchQueryTextColor};
              }
            }

            .cm-completionLabel {
              flex-shrink: 0;
            }

            .cm-completionDetail {
              padding-left: ${({ theme }) => theme.space.xs};
              font-size: 0.675rem;
              color: ${({ theme }) => theme.gray06};
              flex: 1;
              min-width: 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-style: initial;
              text-align: right;
            }

            .cm-completionMatchedText {
              text-decoration: none;
              color: ${({ theme }) => theme.searchFilterKeywordColor};
              font-weight: bold;
            }

            &[aria-selected] {
              color: ${({ theme }) => theme.searchQueryTextColor};
              background-color: ${({ theme }) => theme.colorBg2};

              .theme-dark & {
                background-color: ${({ theme }) => theme.colorBg3};
              }

              .tabStyle {
                display: inline-block;
              }
            }
          }
        }
      }
    }

    .sg-query-filter-placeholder {
      color: ${({ theme }) => theme.textMuted};
      font-style: italic;
    }
  `,
  LoadingSpinner: styled.div`
    .theme-light & {
      --loading-spinner-outer-color: ${({ theme }) => theme.gray05};
      --loading-spinner-inner-color: ${({ theme }) => theme.gray08};
    }
    .theme-dark & {
      --loading-spinner-outer-color: ${({ theme }) => theme.gray07};
      --loading-spinner-inner-color: ${({ theme }) => theme.white};
    }

    flex-shrink: 0;
    margin: ${({ theme }) => theme.space.xxs};
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    animation: loading-spinner-spin 1s linear infinite;
    border: 2px solid var(--loading-spinner-outer-color, rgba(0, 0, 0, 0.3));
    border-top: 2px solid var(--loading-spinner-inner-color, rgba(0, 0, 0, 1));
  `,
};

// SearchButton.module.scss
const SearchButton = {
  Btn: styled.button`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    display: flex;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    border: none;

    @media (--xs-breakpoint-down) {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  `,
};

// SearchHelpDropdownButton.module.scss
const SearchHelpDropdownButton = {
  TriggerButton: styled.button`
    padding: ${({ theme }) => theme.space.sm};
    display: flex;
    align-items: center;
    cursor: pointer;

    &[aria-expanded='true'],
    &:hover {
      background-color: ${({ theme }) => theme.colorBg2};
      color: ${({ theme }) => theme.linkColor};
    }
  `,
  Content: styled.div`
    min-width: 10rem;
    max-width: 14.8rem;
    padding-top: ${({ theme }) => theme.space.xs};
  `,
};

// SearchBox.module.scss
const SearchBox = {
  SearchBox: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-width: 12rem;
    min-height: 32px;

    @media (--xs-breakpoint-down) {
      background-color: ${({ theme }) => theme.colorBg1};
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      border-radius: ${({ theme }) => theme.borderRadius};
      display: inline;
      padding: ${({ theme }) => theme.space.sm};
    }

    &__shadow {
      box-shadow: ${({ theme }) => theme.searchInputShadow};
    }

    &__background-container {
      display: flex;
      flex-grow: 1;
      align-items: center;
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      border-right-color: transparent;
      border-left-color: transparent;
      background-color: ${({ theme }) => theme.colorBg1};
      height: 100%;

      @media (--xs-breakpoint-down) {
        height: auto;
        border: none;
        display: inline;
      }

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-left-color: ${({ theme }) => theme.inputBorderColor};
      }
    }

    &__focus-container {
      height: calc(100% + 2px);
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      margin: -1px;
      border: 1px solid transparent;
      padding-left: ${({ theme }) => theme.space.md};
      border-top-left-radius: ${({ theme }) => theme.borderRadius};
      border-bottom-left-radius: ${({ theme }) => theme.borderRadius};

      &:not(:first-child) {
        padding-left: ${({ theme }) => theme.space.sm};

        @media (--xs-breakpoint-down) {
          padding-left: 0;
          margin-left: 0;
        }
      }

      &:focus-within {
        border: 1px solid ${({ theme }) => theme.inputFocusBorderColor};
        box-shadow: ${({ theme }) => theme.searchBoxFocusBoxShadow};
      }

      @media (--xs-breakpoint-down) {
        height: auto;
        flex-wrap: wrap;
        display: inline;
        padding-left: 0;
        margin-left: 0;

        &:focus-within {
          border: none;
          box-shadow: none;
        }
      }
    }

    &__align-middle {
      @media (--xs-breakpoint-down) {
        display: inline-block;
        vertical-align: middle;
        margin-bottom: ${({ theme }) => theme.space.sm};
      }
    }

    &__separator {
      width: 1px;
      height: 1rem;
      background-color: ${({ theme }) => theme.borderColor2};

      @media (--xs-breakpoint-down) {
        display: none;
      }
    }

    &__input {
      @media (--xs-breakpoint-down) {
        display: inline-block;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.inputBorderColor};
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};

        &:focus-within,
        &:focus {
          border: 1px solid ${({ theme }) => theme.inputFocusBorderColor};
          box-shadow: ${({ theme }) => theme.searchBoxFocusBoxShadow};
        }
      }
    }

    &__toggles {
      padding-right: ${({ theme }) => theme.space.md};
      padding-left: 0.35rem;

      @media (--xs-breakpoint-down) {
        display: inline-flex !important;
        margin-top: ${({ theme }) => theme.space.md};
        padding-left: 0;
      }
    }

    &__button {
      display: flex;

      @media (--xs-breakpoint-down) {
        display: inline-flex;
        flex-direction: row-reverse;
        margin-top: ${({ theme }) => theme.space.sm};
        float: right;
      }
    }
  `,
  HelpButton: styled.button`
    margin-left: ${({ theme }) => theme.space.xs};
  `,
};

// LazyQueryInput.module.scss
const LazyQueryInput = {
  IntermediateInput: styled.input`
    font-size: ${({ theme }) => theme.codeFontSize};
    border: none;
    padding: 0;
    height: unset;

    &:focus {
      box-shadow: none;
    }
  `,
  FormControl: styled.div`
    cursor: text;
    height: unset;

    &:focus-within {
      border: 1px solid ${({ theme }) => theme.inputFocusBorderColor};
      box-shadow: ${({ theme }) => theme.searchBoxFocusBoxShadow};
    }
  `,
};

// SearchContextDropdown.module.scss
const SearchContextDropdown = {
  Button: styled.button`
    color: ${({ theme }) => theme.searchQueryTextColor};
    margin-left: ${({ theme }) => theme.space.xs};
    margin-right: ${({ theme }) => theme.space.xs};
    padding: 0.0625rem 0.125rem;
    border-radius: 0.25rem;
    background-color: transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
    transition: none;

    @media (--xs-breakpoint-down) {
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      margin-left: 0;
    }

    &:hover,
    &:active,
    &:focus-visible {
      text-decoration: none;
      color: ${({ theme }) => theme.searchQueryTextColor};
    }

    &:hover,
    &:focus-visible {
      background-color: ${({ theme }) => theme.colorBg2};
      border-color: ${({ theme }) => theme.colorBg2};
    }

    &:focus-visible {
      border-color: ${({ theme }) => theme.borderActiveColor};
      box-shadow: none;
    }

    &:active,
    &--open,
    &--open:hover,
    &--open:focus {
      background-color: ${({ theme }) => theme.colorBg2};
    }

    &:disabled,
    &:hover:disabled,
    &:active:disabled,
    &:focus:disabled {
      background-color: ${({ theme }) => theme.colorBg3};
      color: ${({ theme }) => theme.textMuted};
      border-color: transparent;
      opacity: 1;
      pointer-events: auto;

      .theme-light & {
        background-color: ${({ theme }) => theme.colorBg2};
      }

      .search-filter-keyword,
      .search-keyword {
        color: ${({ theme }) => theme.textMuted};
      }
    }

    &::after {
      display: none;
    }

    &-content {
      display: block;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  `,
  Menu: styled.div`
    @media (--xs-breakpoint-down) {
      max-width: 85%;
      transform: none;
    }
  `,
};

// SearchContextMenu.module.scss
const SearchContextMenu = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 31rem;
    max-width: 100%;
  `,
  Header: styled.div`
    display: flex;
    padding: ${({ theme }) => theme.space.sm};
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor2};

    &-input {
      width: 100%;
    }

    &-input-element {
      padding-left: ${({ theme }) => theme.space.sm};
      padding-right: ${({ theme }) => theme.space.sm};
      font-size: 0.75rem;
    }
  `,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor2};
    color: ${({ theme }) => theme.textMuted};

    &-close {
      color: ${({ theme }) => theme.iconColor};
    }
  `,
  List: styled.ul`
    max-height: 310px;
    margin: 0;
    padding: ${({ theme }) => theme.space.xs} 0;
    overflow: auto;
  `,
  Item: styled.li`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};

    &--error {
      color: ${({ theme }) => theme.danger} !important;
    }

    &-name {
      width: 10rem;
      margin-right: ${({ theme }) => theme.space.xs};
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      white-space: nowrap;

      [data-suggested-value] {
        font-weight: 500;
      }
    }

    &-description {
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
      font-size: 0.75rem;
      white-space: nowrap;
    }

    &[data-highlighted] {
      > .item-default {
        background-color: ${({ theme }) => theme.colorBg1};
        border-color: ${({ theme }) => theme.colorBg1};
      }
    }

    &:not([data-highlighted]) {
      > .item-description {
        color: ${({ theme }) => theme.textMuted};
      }
    }

    &--selected {
      background-color: ${({ theme }) => theme.colorBg3};

      > .item-default {
        background-color: ${({ theme }) => theme.colorBg1};
        border-color: ${({ theme }) => theme.colorBg1};
      }
    }
  `,
  Footer: styled.div`
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.borderColor2};
    padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.sm};

    &-button {
      color: ${({ theme }) => theme.linkColor};
      padding: 0;
    }
    &-icon {
      font-size: 1.2rem;
      max-height: 1.29rem;
    }
  `,
  InfiniteScrollTrigger: styled.div`
    height: 1px;
  `,
  Star: styled.span`
    color: ${({ theme }) => theme.yellow};
    flex-shrink: 0;
    transform: translateY(-0.0625rem);
  `,
  Separator: styled.div`
    border-top: 1px solid ${({ theme }) => theme.borderColor2};
    margin: ${({ theme }) => theme.space.xs} 0;
  `,
};

// SearchHistoryDropdown.module.scss
const SearchHistoryDropdown = {
  List: styled.ul`
    padding: ${({ theme }) => theme.space.xs} 0;
    margin: 0;
    list-style: none;
    font-size: ${({ theme }) => theme.codeFontSize};
    max-width: 55rem;

    li {
      padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      &:hover {
        background-color: ${({ theme }) => theme.bodyBg};
      }

      &[aria-selected='true'] {
        background-color: ${({ theme }) => theme.dropdownLinkHoverBg};
      }
    }
  `,
  TriggerButton: styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.textMuted};
    margin-left: ${({ theme }) => theme.space.xs};
    margin-right: ${({ theme }) => theme.space.xs};
    border-radius: 0.25rem;
    padding: 0.0625rem 0.125rem;

    &.open,
    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colorBg2};
    }

    @media (--xs-breakpoint-down) {
      border: 1px solid ${({ theme }) => theme.inputBorderColor};
      margin-left: 0;
    }
  `,
};

export {
  CodeMirrorQueryInput,
  SearchButton,
  SearchHelpDropdownButton,
  SearchBox,
  LazyQueryInput,
  SearchContextDropdown,
  SearchContextMenu,
  SearchHistoryDropdown,
};

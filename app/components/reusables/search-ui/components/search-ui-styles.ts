// StyledComponents.js
import styled from 'styled-components';
import { theme } from 'antd';

const { useToken } = theme;

// CodeExcerpt.module.scss
const CodeExcerpt = {
  Line: styled.div`
    height: 18px;
    vertical-align: middle;
    padding: 0;
  `,
  Code: styled.div`
    white-space: pre;
    padding-left: ${({ theme }) => theme.space.md};
  `,
  Error: styled.div`
    width: 100%;
  `,
  Alert: styled.div`
    margin-bottom: 0;
    color: ${({ theme }) => theme.colorError};
  `,
};

// CommitSearchResult.module.scss
const CommitSearchResult = {
  Oid: styled.div`
    background: ${({ theme }) => theme.codeBg};
    display: inline-block;
    padding: ${({ theme }) => theme.space.xs};
  `,
};

// CommitSearchResultMatch.module.scss
const CommitSearchResultMatch = {
  Markdown: styled.div`
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    table,
    th,
    td {
      border: none;
      padding: 0;
    }

    code,
    pre {
      background-color: transparent;
      padding: 0;
    }

    p,
    li {
      code {
        display: inline;
      }
    }
  `,
  CodeExcerpt: styled.div`
    padding: ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.bodyColor};

    table {
      margin-bottom: 0 !important;
    }
    td.line {
      display: none;
    }
    td.code > span:first-child {
      padding-left: ${({ theme }) => theme.space.md};
    }

    td.code > span:last-child {
      padding-right: ${({ theme }) => theme.space.md};
    }
  `,
  Loader: styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
  `,
  LineHidden: styled.div`
    visibility: hidden;
  `,
};

// OldResultContainer.module.scss
const OldResultContainer = {
  Styled: styled.div`
    &:last-child {
      border-bottom-width: 1px;
    }

    &:not(:last-of-type) {
      isolation: isolate;
      margin-bottom: ${({ theme }) => theme.space.md};
    }
  `,
};

// RepoMetadata.module.scss
const RepoMetadata = {
  Container: styled.div`
    gap: ${({ theme }) => theme.space.sm};
  `,
  Highlight: styled.span`
    color: ${({ theme }) => theme.searchFilterKeywordColor};
  `,
  BadgeButton: styled.button`
    &:focus-visible,
    &:hover {
      background-color: ${({ theme }) => theme.badgeDark};
    }
  `,
};

// ResultContainer.module.scss
const ResultContainer = {
  Styled: styled.div`
    isolation: isolate;
  `,
  Header: styled.div`
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor2};
    background-color: ${({ theme }) => theme.resultHeaderBg};

    &-title {
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;
    }

    .match-highlight {
      color: ${({ theme }) => theme.textMutedHighlighted};
    }
  `,
  Result: styled.div`
    background-color: ${({ theme }) => theme.codeBg};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor2};
  `,
  SearchResultMatch: styled.a`
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
  `,
  HorizontalDividerBetween: styled.div`
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    }
  `,
  FocusableBlock: styled.div`
    &:focus-visible {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.primary2};
    }
  `,
  Clickable: styled.div`
    cursor: pointer;
    &:hover {
      text-decoration: none;
      background-color: ${({ theme }) => theme.subtleBg2};
    }
  `,
  CopyButton: styled.button`
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
    display: inline-flex;
    align-items: center;

    .copy-button-container:hover &,
    .copy-button-container:focus-within & {
      visibility: visible;
    }
  `,
  DividerBetween: styled.div`
    > *:not(:last-child)::after {
      content: ' ';
      height: 1rem;
      margin: 0 ${({ theme }) => theme.space.md};
      border-right: 1px solid ${({ theme }) => theme.borderColor2};
      display: block;
    }
  `,
  MatchType: styled.span`
    white-space: nowrap;
  `,
  DividerVertical: styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.borderColor2};
    width: 100%;
    margin: ${({ theme }) => theme.space.sm} 0;
  `,
  Divider: styled.div`
    border-right: 1px solid ${({ theme }) => theme.borderColor2};
    height: 1rem;
    margin: 0 ${({ theme }) => theme.space.sm};
  `,
  Gap1: styled.div`
    gap: ${({ theme }) => theme.space.sm};
  `,
  TitleInner: styled.div`
    overflow-wrap: anywhere;
  `,
  Icon: styled.span`
    margin-right: ${({ theme }) => theme.space.xs};
  `,
  Title: styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    min-width: 0;
    flex-wrap: wrap;
  `,
};

// SearchResultStar.module.scss
const SearchResultStar = {
  Star: styled.svg`
    fill: ${({ theme }) => theme.yellow};
    height: 1rem;
    width: 1rem;
    min-width: 1rem;
    margin-right: ${({ theme }) => theme.space.xs};
  `,
};

// SymbolSearchResult.module.scss
const SymbolSearchResult = {
  Symbols: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.codeBg};
  `,
  Symbol: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.space.sm};

    &-code-excerpt {
      .code {
        white-space: pre-line !important;
        padding-left: ${({ theme }) => theme.space.md} !important;
        overflow-wrap: anywhere;
      }
    }
  `,
};

export {
  CodeExcerpt,
  CommitSearchResult,
  CommitSearchResultMatch,
  OldResultContainer,
  RepoMetadata,
  ResultContainer,
  SearchResultStar,
  SymbolSearchResult,
};

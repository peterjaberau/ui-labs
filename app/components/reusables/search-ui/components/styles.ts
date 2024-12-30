// StyledCodeExcerpt.js
import styled from 'styled-components';
import { theme } from 'antd';
const { useToken } = theme;

const ResultContainer = styled.div`
  &:last-child {
    border-bottom-width: 1px;
  }

  &:not(:last-of-type) {
    isolation: isolate;
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`;

const Header = styled.div`
  padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.xs} ${theme.padding.xxs} 0`};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.backgroundColorBase};

  &-title {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
  }

  p {
    margin-bottom: 0;
  }

  &:not(:only-of-type) {
    border-bottom: none;
  }

  .match-highlight {
    color: ${({ theme }) => theme.textColorSecondary};
  }
`;

const Result = styled.div`
  isolation: isolate;
  border-radius: ${({ theme }) => theme.borderRadiusBase};
  border: 1px solid ${({ theme }) => theme.borderColorBase};
  margin-top: ${({ theme }) => theme.margin.xs};

  &:hover {
    border-color: ${({ theme }) => theme.borderColorHover};
  }
`;

const HighlightResult = styled.div`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.borderColorHover};
`;




const CodeExcerpt = styled.div`
  .line,
  .code {
    height: 18px;
    vertical-align: middle;
    padding: 0;
  }

  .line {
    min-width: ${({ theme }) => theme.space.sm};
    text-align: right;
    user-select: none;

    &::before {
      content: attr(data-line);
      color: ${({ theme }) => theme.textColorSecondary};
    }
  }

  .code {
    white-space: pre;
    padding-left: ${({ theme }) => theme.space.md};
  }

  &-error {
    width: 100%;
  }

  &-alert {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colorError};
  }
`;




export { ResultContainer, Header, Result, HighlightResult };

export { CodeExcerpt };
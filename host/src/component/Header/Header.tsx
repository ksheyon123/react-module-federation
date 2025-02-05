import React from "react";
import styled from "styled-components";
import defaultBackBtn from "@/assets/arrows_button_left__arrow.png";
import "tailwindcss/tailwind.css";

interface HeaderProps {
  /** 헤더 로고 컴포넌트 */
  logo?: React.ReactNode;
  /** 헤더 제목 */
  title?: string;
  /** 추가적인 자식 컴포넌트 */
  children?: React.ReactNode;
  /** 배경색 - 기본값: white */
  backgroundColor?: string;
  /** 그림자 표시 여부 - 기본값: true */
  showShadow?: boolean;
  /** 헤더 높이 - 기본값: 64px */
  height?: string;
  /** 최대 너비 - 기본값: 100% */
  maxWidth?: string;
  /** 백 버튼 */
  backBtn?: any;
}

// 동적으로 변하는 스타일을 위한 styled-components
const HeaderWrapper = styled.header<{
  $backgroundColor: string;
  $showShadow: boolean;
  $height: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  height: ${(props) => props.$height};
  box-shadow: ${(props) =>
    props.$showShadow ? "0 2px 4px rgba(0,0,0,0.1)" : "none"};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.$showShadow ? "0 4px 6px rgba(0,0,0,0.1)" : "none"};
  }
`;

const ContentContainer = styled.div<{ $maxWidth: string }>`
  max-width: ${(props) => props.$maxWidth};
`;

const Header: React.FC<HeaderProps> = ({
  logo,
  title = "My Application",
  children,
  backgroundColor = "white",
  showShadow = true,
  height = "64px",
  maxWidth = "100%",
  backBtn,
}) => {
  return (
    <HeaderWrapper
      $backgroundColor={backgroundColor}
      $showShadow={showShadow}
      $height={height}
      className="w-full fixed top-0 left-0 z-50"
    >
      <ContentContainer
        $maxWidth={maxWidth}
        className="mx-auto px-4 h-full flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          {backBtn && <img src={defaultBackBtn} />}
          {logo && <div className="flex items-center">{logo}</div>}
          {title && (
            <h1 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
              {title}
            </h1>
          )}
        </div>

        <div className="flex items-center gap-4">{children}</div>
      </ContentContainer>
    </HeaderWrapper>
  );
};

export default Header;
export type { HeaderProps };

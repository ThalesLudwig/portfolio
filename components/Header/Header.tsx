import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setEnglish, setPortuguese } from "../../config/locationSlice";
import { switchTheme } from "../../config/themeSlice";
import { AppDispatch } from "../../config/store";
import { getRandomAvatar } from "../../helpers/getRandomAvatar";
import { LANGUAGE } from "../../lang";
import StoreType from "../../types/StoreType";
import Button from "../Button/Button";
import { Avatar, Wrapper, Container, Title, ChatInput, ChatIcon, ChatMobile } from "./Header.styled";
import localization from "./localization";
import { FiMoon, FiSun, FiMessageCircle, FiX } from "react-icons/fi";
import Chat from "../Chat/Chat";

function Header() {
  const { value: location } = useSelector((store: StoreType) => store.location);
  const { isDarkMode } = useSelector((store: StoreType) => store.theme);
  const dispatch = useDispatch<AppDispatch>();
  const { formatMessage } = useIntl();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const changeLanguage = () => {
    if (location === LANGUAGE.EN_US) {
      dispatch(setPortuguese());
    } else {
      dispatch(setEnglish());
    }
  };

  const changeTheme = () => {
    dispatch(switchTheme());
  };

  const toogleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Container>
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Wrapper>
        <Avatar src="/expression_1.png" />
        <Title>{formatMessage(localization.greeting)}</Title>
      </Wrapper>
      <ChatInput onClick={toogleChat}>
        {isChatOpen ? "" : formatMessage(localization.askMeAnything)}
        <ChatIcon>{isChatOpen ? <FiX /> : <FiMessageCircle />}</ChatIcon>
      </ChatInput>
      <Wrapper>
        <ChatMobile onClick={toogleChat}>
          <Button isOutlined>{isChatOpen ? <FiX /> : <FiMessageCircle />}</Button>
        </ChatMobile>
        <Button isOutlined onClick={changeLanguage}>
          {location === LANGUAGE.EN_US ? LANGUAGE.PT_BR : LANGUAGE.EN_US}
        </Button>
        <Button isOutlined onClick={changeTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Header;

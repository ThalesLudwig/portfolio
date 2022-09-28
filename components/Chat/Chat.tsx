import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  Avatar,
  AvatarMessage,
  Container,
  Input,
  InputWrapper,
  MessageAuthor,
  MessageBot,
  Messages,
} from "./Chat.styled";
import { chat } from "chat-moduler";
import localization from "./localization";
import { FiSend } from "react-icons/fi";
import { getRandomAvatar } from "../../helpers/getRandomAvatar";
import { useSelector } from "react-redux";
import StoreType from "../../types/StoreType";

type Props = { isOpen: boolean; onClose: Function };
type Message = { isAuthor: boolean; content: string; hasAvatar?: boolean; avatar?: string };

const Chat: React.FC<Props> = ({ isOpen, onClose }) => {
  const { formatMessage } = useIntl();
  const greetings: Message[] = useMemo(
    () =>
      formatMessage(localization.chatGreeting)
        .split(".")
        .map((msg, i) => ({ isAuthor: false, content: msg, hasAvatar: i === 0, avatar: "/expression_1.png" })),
    [formatMessage],
  );

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([...greetings]);
  const { value: lang } = useSelector((store: StoreType) => store.location);

  useClickOutside(chatRef, () => onClose());

  useEffect(() => {
    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event as any;
        target?.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    setMessages([...greetings]);
  }, [lang, greetings]);

  const submitForm = (e?: FormEvent) => {
    !!e && e.preventDefault();
    if (!input.trim()) return;
    let currentConversation: Message[] = [...messages];
    currentConversation.push({ isAuthor: true, content: input });
    const avatar = getRandomAvatar();

    const response = chat({ data: input, lang }) as any;
    if (Array.isArray(response)) {
      let hasAvatar = true;
      response[0].data?.forEach((message: string) => {
        currentConversation.push({ isAuthor: false, content: message, hasAvatar, avatar });
        hasAvatar = false;
      });
    } else {
      currentConversation.push({ isAuthor: false, content: response, hasAvatar: true, avatar });
    }
    setMessages([...currentConversation]);
    setInput("");
  };

  const printMessage = (msg: Message, index: number) => {
    if (msg.isAuthor) {
      return <MessageAuthor key={index}>{msg.content}</MessageAuthor>;
    } else {
      if (msg.hasAvatar) {
        return (
          <AvatarMessage>
            <Avatar src={msg.avatar} />
            <MessageBot hasAvatar key={index}>
              {msg.content}
            </MessageBot>
          </AvatarMessage>
        );
      } else {
        return <MessageBot key={index}>{msg.content}</MessageBot>;
      }
    }
  };

  return (
    <Container ref={chatRef} isOpen={isOpen}>
      <Messages ref={scrollRef}>{messages.map((msg, i) => printMessage(msg, i))}</Messages>
      <form onSubmit={submitForm}>
        <InputWrapper>
          <Input
            ref={inputRef}
            placeholder={formatMessage(localization.askMeAnything)}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FiSend onClick={submitForm} />
        </InputWrapper>
      </form>
    </Container>
  );
};

export default Chat;

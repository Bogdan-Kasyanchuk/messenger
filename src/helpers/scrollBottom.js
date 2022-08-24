const scrollBottom = chatContainer => {
  const scroll =
    chatContainer.current.scrollHeight - chatContainer.current.clientHeight;
  chatContainer.current.scrollTo(0, scroll);
};

export default scrollBottom;

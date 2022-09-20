const scrollBottom = ({ current }) => {
  current.scrollTo(0, current.scrollHeight - current.clientHeight);
};

export default scrollBottom;

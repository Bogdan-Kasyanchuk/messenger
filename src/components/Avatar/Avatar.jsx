import styled from 'styled-components';
import { CgCheckO, CgRemove } from 'react-icons/cg';
import notAvatar from 'assets/img/notAvatar.png';

function Avatar({ src, alt, status }) {
  const avatarUrl = src ? src : notAvatar;

  return (
    <Div>
      <Img src={avatarUrl} alt={alt} />
      {status && (
        <Span status={status}>
          {status === 'online' ? <CgCheckO /> : <CgRemove />}
        </Span>
      )}
    </Div>
  );
}

export default Avatar;

const Div = styled.div`
  position: relative;
  border-radius: 50%;
  min-width: 50px;
  height: 50px;
`;

const Img = styled.img`
  border-radius: 50%;
`;

const Span = styled.span`
  position: absolute;
  bottom: -3px;
  right: -3px;
  color: ${({ status }) => (status === 'online' ? '#44AE66' : '#ff0000')};
  line-height: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`;

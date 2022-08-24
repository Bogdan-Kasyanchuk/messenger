import toast from 'react-hot-toast';

const toastCustom = (avatar, name, message) => {
  toast.custom(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        borderRadius: '22px',
        backgroundColor: '#44AE66',
      }}
    >
      <img
        style={{
          marginRight: '10px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        }}
        src={avatar}
        alt={name}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '225px',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            color: '#fff',
          }}
        >
          {name}
        </span>
        <span
          style={{
            color: '#3c4252',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {message}
        </span>
      </div>
    </div>,
  );
};

export default toastCustom;

import { RotatingLines } from 'react-loader-spinner';

const DeleteSpinner = () => {
  return (
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      animationDuration="0.75"
      width="32"
      visible={true}
    />
  );
};

export default DeleteSpinner;

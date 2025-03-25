import BeatLoader from 'react-spinners/BeatLoader';

export default function Loader() {
  return (
    <>
      <BeatLoader
        color="#007bff"
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}

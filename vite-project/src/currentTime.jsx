const CurrentTime = () => {
  let event = new Date();

  return (
    <>
      <h2>
        Indian: {event.toLocaleDateString()} - {event.toLocaleTimeString()}
      </h2>
    </>
  );
};

export default CurrentTime;

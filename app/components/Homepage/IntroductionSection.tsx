import Icon from "../Icon/Icon";

const Introduction = () => {
  return (
    <section className="bg-white-100 py-24">
      <div className="container mx-auto px-4">
        <div
          className="flex
                    flex-col
                    text-center
                    justify-center"
        >
          <h1
            className="
                    text-8xl
                    font-bold"
            data-cy="introduction"
          >
            Hi my name is
          </h1>

          <div
            className="
                    flex
                    flex-row
                    text-center
                    justify-center"
          >
            <h5 className="text-2xl p-2">My tech stack </h5>
            <Icon name="nextjs" width={50} height={50} />
            <Icon name="tailwind" width={50} height={50} />
            <Icon name="mongodb" width={50} height={50} />
            <Icon name="css3" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-lg font-semibold text-orange-500 tracking-wide">
        Submission on process.Thank for holding...{" "}
      </p>
    </div>
  );
};

export default Loading;

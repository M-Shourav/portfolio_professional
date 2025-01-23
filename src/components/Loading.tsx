import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Circles
        height="70"
        width="70"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-[13px] md:text-lg text-center mt-4 font-semibold text-orange-500 tracking-wide">
        Submission on process.Thank for holding...{" "}
      </p>
    </div>
  );
};

export default Loading;

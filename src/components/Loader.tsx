import Lottie from "lottie-react";
import loader from "../assets/loader-animation.json";

const Loader = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;

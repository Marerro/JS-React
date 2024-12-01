import Header from "../assets/img/Header.png";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="bg-slate-200 w-full mx-auto absolute grid grid-cols-2 ">
        <div>
        <img src={Header} alt="Description" className="relative left-36 top-8 w-2/5" />
        </div>
        <div className="w-3/6 flex-row self-center text-center">
          <h1 className=" text-red-600 font-roboto">Kodėl verta tapti kraujo donoru?</h1>
          <p className="font-roboto p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam ducimus laborum, distinctio labore fugiat dicta vero neque nostrum ipsam quae veritatis eveniet animi illum praesentium ad nulla ratione consequatur?</p>
          <div className="flex justify-center">
          <Link to="/register" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 flex justify-center w-48">Registruotis</Link>
          </div>
        </div>
        <div className="bg-slate-600 h-20 w-full col-span-full"></div>
      </div>
    </>
  );
}

export default Main;
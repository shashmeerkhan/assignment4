import Image from "next/image";
import html from "../app/Public/html.png";
import css from "../app/public/css.png";
import js from "../app/public/js.png";
import dm from "../app/public/DM.png";
import acc from "../app/public/acc.png";
import gd from "../app/public/pshop.png";
import ms from "../app/public/msoff.png";
import dn from "../app/public/dnet.png";
import Link from "next/link";

export default function Cards() {
  return (
    <>
      <div className="h-auto w-auto flex justify-evenly items-center flex-wrap p-5 bg-white">
        {/* ACC Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <Image
              className="rounded-xl"
              src={acc}
              alt="Accounting picture"
              height={300}
              width={250}
            />
            <h3 className="font-bold text-[30px] pl-4">Accounting</h3>
            <p className="text-[18px] pl-4">Computerized Accounting</p>
            <Link href={"/acc"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* graphic Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
          <div className="rounded-3xl pl-12">
            <Image
              className="rounded-xl "
              src={gd}
              alt="CSS picture"
              height={120}
              width={160}
            /></div>
            <h3 className="font-bold text-[25px] pl-4">Graphic designer</h3>
            <p className="text-[13px] pl-4">Exploring the World of Graphic Design</p>
            <Link href={"/gd"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* dot net Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <div className="rounded-3xl pl-12">
              <Image
                className="rounded-3xl"
                src={dn}
                alt="DotNet picture"
                height={120}
                 width={160}
              />
            </div>
            <h3 className="font-bold text-[35px] pl-4">Dot Net</h3>
            <p className="text-[14px] pl-4">Powerful Framework for Developers</p>
            <Link href={"/dot-net"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* msoffice Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <div className="rounded-3xl pl-12">
              <Image
                className="rounded-3xl"
                src={ms}
                alt="msoffice picture"
                height={220}
                width={240}
              />
            </div>
            <h3 className="font-bold text-[35px] p-2">Ms Office</h3>
            <p className="text-[18px] pl-4">
              MicroSoft Office
            </p>
            <Link href={"/msoffice"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>



      <div className="h-auto w-auto flex justify-evenly items-center flex-wrap p-5 bg-white">
        {/* HTML Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <Image
              className="rounded-xl"
              src={html}
              alt="HTML picture"
              height={300}
              width={250}
            />
            <h3 className="font-bold text-[30px] pl-4">HTML</h3>
            <p className="text-[18px] pl-4">Hyper Text Markup Language</p>
            <Link href={"/htmlblog"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* CSS Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <Image
              className="rounded-xl"
              src={css}
              alt="CSS picture"
              height={300}
              width={250}
            />
            <h3 className="font-bold text-[35px] pl-4">CSS</h3>
            <p className="text-[18px] pl-4">Cascading Style Sheets</p>
            <Link href={"/cssblog"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* JavaScript Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <div className="rounded-3xl pl-12">
              <Image
                className="rounded-3xl"
                src={js}
                alt="JavaScript picture"
                height={120}
                width={140}
              />
            </div>
            <h3 className="font-bold text-[35px] pl-4">JavaScript</h3>
            <p className="text-[18px] pl-4">Scripting Language</p>
            <Link href={"/jsblog"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Digital Marketing Card */}
        <div className="w-[280px] h-[380px] text-black bg-white rounded-xl border-4 hover:border-6 hover:border-[#5a8de0] duration-300 shadow-lg shadow-[#5a8de0] hover:translate-y-[-10px]">
          <div className="p-[10px]">
            <div className="rounded-3xl pl-12">
              <Image
                className="rounded-3xl"
                src={dm}
                alt="Digital Marketing picture"
                height={120}
                width={140}
              />
            </div>
            <h3 className="font-bold text-[23px] p-2">Digital Marketing</h3>
            <p className="text-[18px] pl-4">
              Promoting  online
            </p>
            <Link href={"/dmblog"}>
              <button className="bg-[#eaf2ff] border-2 px-4 py-2 rounded-xl font-bold ml-[25%] mt-4 text-center hover:border-[#eaf2ff] hover:bg-[#5a8de0] hover:text-[#eaf2ff] hover:text-[17px] duration-75">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function UntukTest() {
  return (
    <div>
      <h1 className="font-mono md:font-serif ">Hello world!</h1>
      <p className="text-2xl subpixel-antialiased hover:text-green-500">
        Hallo
      </p>
      <p className="non-italic font-bold tracking-tight">Nama Saya</p>
      <p className="stacked-fractions font-mono tracking-wide leading-loose">
        1/2 1/3
      </p>
      <p className="stacked-fractions font-mono leading-relaxed text-center text-red-600 lowercase ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non
        rerum accusamus{" "}
        <span className="underline decoration-sky-600 decoration-wavy decoration-8">
          dolor officiis
        </span>{" "}
        voluptates molestias aperiam, debitis doloremque sed ad consequatur
        expedita vel ab libero aliquam assumenda mollitia facilis?
      </p>
      <a href="">Klik</a>
      <div class="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed"></div>
      <div class="text-5xl font-extrabold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world
        </span>
      </div>
      <button class="bg-indigo-500 p-3 rounded-lg hover:opacity-10">
        Save changes
      </button>
      <div class="border-t-8 border-indigo-600 ...">Halo</div>
      <div class="grid grid-cols-3 divide-y-reverse">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div class="justify-center -space-x-14">
        <div class="mix-blend-multiply bg-blue-400">sdf</div>
        <div class="mix-blend-multiply bg-pink-400">df</div>
      </div>
      <div className="flex justify-center ">
        <div
          className="w-24 h-24 bg-red-500 mx-auto mt-4 Class
Properties	filter: blur(0);
blur-sm"
        ></div>
        <div className="w-24 h-24 bg-red-500 mt-4 mx-auto brightness-50 grayscale"></div>
        <div className="w-24 h-24 bg-red-500 mt-4 mx-auto contrast-150 sepia backdrop-blur-lg"></div>
        <div className="w-24 h-24 bg-red-500 mt-4 mx-auto drop-shadow-2xl"></div>
      </div>
      <table className="border-separate border border-gray-50 table-fixed">
        <thead>
          <tr>
            <th className="border border-gray-300">State</th>
            <th className="border border-gray-300">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300">India</td>
            <td className="border border-gray-300">NewDehl</td>
          </tr>
        </tbody>
      </table>
      <button className="transition ease-in-out delay-150 bg-blue-600 m-2 p-1 rounded-md hover:-translate-y hover:scale-110 hover:bg-indigo-500 duration-300">
        Submit
      </button>
      <div className="mt-3 ml-3 w-24 h-24 bg-indigo-500 transition duration-0 rotate-45 translate-x-9 skew-x-6 ease-out hover:duration-150"></div>
      <select>
        <option>Yes</option>
        <option>No</option>
        <option>Maybe</option>
      </select>
      <button className="cursor-pointer bg-indigo-500 p-3 m-4">OK</button>
      <button className="cursor-wait bg-indigo-700 p-3 m-4">Saving..</button>
      <button className=" cursor-not-allowed bg-violet-500 opacity-30 p-3 m-4">
        Done
      </button>{" "}
      <br />
      <textarea
        name=""
        className="caret-pink-700 resize-y rounded-md"
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

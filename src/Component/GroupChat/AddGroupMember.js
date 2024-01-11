import React from "react";

function AddGroupMember() {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50  ">
      <div class="bg-white  mx-auto w-full">
        <div class="grid grid-cols-6 h-full">
          <div class="bg-blue-900 p-10 col-span-2">
            <h2 class=" mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Add Group Member
            </h2>

            <div class="relative h-10 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-[7px] border border-blue-700 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-500 placeholder-shown:border-t-blue-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 "
                placeholder=" "
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Add new member
              </label>
            </div>
          

            <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
              Location Address
              <span class="font-normal text-xs text-blue-300 block">
                Romada, 16/A, YoYo City, USA
              </span>
            </p>

            <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
              Phone Number
              <span class="font-normal text-xs text-blue-300 block">
                +889 (909) 567 87 9
              </span>
            </p>
            <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
              Email Address
              <span class="font-normal text-xs text-blue-300 block">
                example@example.com
              </span>
            </p>
            <p class="font-bold text-blue-100 py-8 border-b border-blue-700">
              Web Address
              <span class="font-normal text-xs text-blue-300 block">
                zigzagexampl.com
              </span>
            </p>
          </div>
          <div class="bg-blue-50 p-14 col-span-4 text-center">
            <div className="center-container">
              <span data-icon="intro-md-beta-logo-light" className="_3PwsU ">
                <svg
                  viewBox="0 0 303 172"
                  width="560"
                  preserveAspectRatio="xMidYMid meet"
                  className=""
                  fill="none"
                >
                  <title>intro-md-beta-logo-light</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M229.565 160.229C262.212 149.245 286.931 118.241 283.39 73.4194C278.009 5.31929 212.365 -11.5738 171.472 8.48673C115.998 35.6999 108.972 40.1612 69.2388 40.1612C39.645 40.1612 9.51318 54.4147 5.7467 92.952C3.0166 120.885 13.9985 145.267 54.6373 157.716C128.599 180.373 198.017 170.844 229.565 160.229Z"
                    fill="#DAF7F3"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M131.589 68.9422C131.593 68.9422 131.596 68.9422 131.599 68.9422C137.86 68.9422 142.935 63.6787 142.935 57.1859C142.935 50.6931 137.86 45.4297 131.599 45.4297C126.518 45.4297 122.218 48.8958 120.777 53.6723C120.022 53.4096 119.213 53.2672 118.373 53.2672C114.199 53.2672 110.815 56.7762 110.815 61.1047C110.815 65.4332 114.199 68.9422 118.373 68.9422C118.377 68.9422 118.381 68.9422 118.386 68.9422H131.589Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.682 128.716C109.186 128.716 112.026 125.908 112.026 122.446C112.026 118.983 109.186 116.176 105.682 116.176C104.526 116.176 103.442 116.481 102.509 117.015L102.509 116.959C102.509 110.467 97.1831 105.203 90.6129 105.203C85.3224 105.203 80.8385 108.616 79.2925 113.335C78.6052 113.143 77.88 113.041 77.1304 113.041C72.7503 113.041 69.1995 116.55 69.1995 120.878C69.1995 125.207 72.7503 128.716 77.1304 128.716C77.1341 128.716 77.1379 128.716 77.1416 128.716H105.682L105.682 128.716Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="mb-6">
              <h2 class="mb-10 font-bold text-2xl text-blue-400 ">
                Web WhatsApp
                <p class="font-bold text-blue-100 py-4 ">
                  <span class="font-normal  text-blue-500 block">
                    Send and receive messages without keeping your phone online.
                  </span>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroupMember;

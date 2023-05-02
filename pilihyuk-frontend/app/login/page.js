import React from 'react'
import FormLogin from './FormLogin';

export default function page() {
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-white dark:bg-slate-950 md:flex-row">
        <div className="w-1/3" />
        <div className="relative flex items-center justify-center w-full md:border-l dark:border-slate-700/50 lg:w-2/5">
          <div className="flex items-center justify-center w-full md:min-h-screen bg-grid-slate-100 dark:bg-grid-slate-800/40 md:p-10">
            <div className="absolute w-full h-full bg-gradient-to-b from-white dark:from-slate-950 to-white dark:to-slate-950 via-transparent dark:via-transparent" />
            <div className="absolute w-full h-full bg-gradient-to-r from-white dark:from-slate-950 to-white dark:to-slate-950 via-transparent dark:via-transparent" />
            <div className="w-full">
              <div className="relative flex justify-center border-b sm:justify-start sm:flex-none sm:border-none sm:border-transparent border-slate-300 dark:border-primary-700 sm:shadow-none bg-slate-50 dark:bg-slate-950 dark:shadow-xl dark:shadow-primary-900/30">
                <a
                  className="flex shrink-0 md:-ml-[5.25rem] mb-6 md:mb-0 pt-6 md:pt-0 items-center focus:outline-none"
                  href="/"
                >
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="w-[5rem] h-[3rem] mr-3"
                    alt="Flowbite Logo"
                  />
                  <svg
                    className="block ml-1 md:hidden fill-slate-800 dark:fill-white"
                    width={117}
                    height={20}
                    viewBox="0 0 123 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3648 7.42725C20.3648 5.21602 19.5088 3.46843 17.9039 2.32715C16.6556 1.43552 14.8367 1.11453 11.4128 1.11453H4.88612L0 27.471H4.88612L6.7407 17.4491H8.30997C13.3387 17.4491 15.0507 16.9855 17.2262 14.9169C19.1165 13.098 20.3648 10.1378 20.3648 7.42725ZM15.3717 8.6042C15.3717 11.7784 12.8394 12.777 9.02327 12.777H7.59667L8.91628 5.82232H10.5569C14.6227 5.82232 15.3717 6.60696 15.3717 8.6042Z"
                      fill="current"
                    />
                    <path
                      d="M37.6534 26.9093L41.2913 7.15084H36.9401L36.4765 9.79006C35.3352 7.68582 33.4449 6.68719 30.6631 6.68719C23.958 6.68719 18.3586 12.4293 18.3586 19.3126C18.3586 24.1631 21.6398 27.373 26.6329 27.373C29.4148 27.373 31.5547 26.4457 33.7659 24.3414L33.3023 26.9093H37.6534ZM35.0855 15.7461C35.0855 19.9189 31.9827 23.0218 28.0595 23.0218C25.135 23.0218 23.2447 21.2029 23.2447 18.3497C23.2447 14.4265 26.5259 11.0383 30.3064 11.0383C33.231 11.0383 35.0855 12.8573 35.0855 15.7461Z"
                      fill="current"
                    />
                    <path
                      d="M52.0532 7.13856C49.735 7.06723 48.4867 7.67354 46.9531 9.52812L47.3098 7.60221H42.9586L39.2851 27.3607H44.0286L46.0615 16.3758C46.4538 13.5226 48.4154 11.7394 51.1973 11.7037L52.0532 7.13856Z"
                      fill="current"
                    />
                    <path
                      d="M64.5271 19.4553C64.5271 17.1014 63.4215 15.9601 60.0333 14.8545C57.1087 13.9272 57.1087 13.7489 57.1087 12.9999C57.1087 11.9656 58.0717 11.0383 59.1773 11.0383C60.1759 11.0383 60.7109 11.5733 60.7466 12.6076H65.3831C65.4544 12.0726 65.49 11.609 65.49 11.2523C65.49 8.79144 62.9935 6.68719 60.069 6.68719C55.8248 6.68719 52.2226 9.93272 52.2226 13.7132C52.2226 16.2098 53.2569 17.3511 56.7164 18.5637C59.1417 19.4196 59.641 19.812 59.641 20.7392C59.641 21.9875 58.464 23.0218 57.1087 23.0218C55.7178 23.0218 54.9332 22.2015 54.8975 20.6322H50.1184C50.0827 21.1672 50.0471 21.6309 50.0471 22.0232C50.0471 25.1974 52.508 27.373 56.0745 27.373C60.5326 27.373 64.5271 23.6281 64.5271 19.4553Z"
                      fill="current"
                    />
                    <path
                      d="M73.0421 7.561H68.2987L64.6252 27.3195H69.3686L73.0421 7.561ZM74.4687 0H69.7253L68.8336 4.70779H73.5771L74.4687 0Z"
                      fill="current"
                    />
                    <path
                      d="M88.8685 27.3551L90.8301 16.7626C91.1155 15.1933 91.2581 13.9807 91.2581 12.9821C91.2581 9.20159 88.9755 7.13301 84.9097 7.13301C82.7342 7.13301 81.2006 7.73932 79.025 9.48691L79.3816 7.59666H74.9948L71.3213 27.3551H76.0648L77.7767 18.0465C78.7753 12.5541 80.7369 11.4842 83.2335 11.4842C85.195 11.4842 86.2293 12.4828 86.2293 14.4087C86.2293 15.443 86.1223 16.5129 85.9083 17.6899L84.1251 27.3551H88.8685Z"
                      fill="current"
                    />
                    <path
                      d="M102.421 7.71258H99.568L100.781 1.11453H96.0372L94.8246 7.71258H92.5063L91.686 12.0281H94.0043L91.1511 27.471H95.8945L98.7477 12.0281H101.601L102.421 7.71258Z"
                      fill="current"
                    />
                    <path
                      d="M119.362 26.9093L123 7.15084H118.649L118.185 9.79006C117.044 7.68582 115.154 6.68719 112.372 6.68719C105.667 6.68719 100.067 12.4293 100.067 19.3126C100.067 24.1631 103.349 27.373 108.342 27.373C111.124 27.373 113.263 26.4457 115.475 24.3414L115.011 26.9093H119.362ZM116.794 15.7461C116.794 19.9189 113.691 23.0218 109.768 23.0218C106.844 23.0218 104.953 21.2029 104.953 18.3497C104.953 14.4265 108.235 11.0383 112.015 11.0383C114.94 11.0383 116.794 12.8573 116.794 15.7461Z"
                      fill="current"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-6">
                <div className="relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl">
                  <div className="relative">
                    <div className="mb-3 lg:mb-6">
                      <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white lg:text-xl">
                        Masuk ke akun Anda
                      </h1>
                    </div>
                   <FormLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

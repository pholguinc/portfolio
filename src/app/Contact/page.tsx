"use client";
import React from "react";
import {At, ChatDots} from '@mynaui/icons-react'

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl mt-40">
        <div className="opacity-100 transform-none ">
          <div>
            <div className="pb-2 text-start ">
              <h2 className="text-4xl md:text-6xl font-bold">CONTACTO</h2>
            </div>
            <hr className="mb-6 text-purple-600" />
          </div>
        </div>

         <div className="flex flex-wrap jusify-start sm:justify-center gap-10 md:gap-20">
          {/* Left section: Email */}
          <div className="contact- w-full md:w-auto">
            <table>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="opacity-100 transform-none text-left "
                  >
                    <h6 className="text-xl bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent  font-semibold mr-70 md:mr-4 ">
                      MAIL
                    </h6>
                  </th>
                  <td className="opacity-100 transform-none">
                    <div className="link-wrapper">
                      <div className="link">
                        <a
                          href="mailto:holguinpedro90@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-row gap-2 text-lg hover:underline block"
                        >
                          <At/> holguinpedro90@gmail.com
                        </a>
                      </div>
                      <div className="link-underline transform -translate-x-full translate-z-0"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right section: Social links */}
          <div className="contact-right w-full md:w-auto">
            <table>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="opacity-100 transform-none text-left align-top"
                  >
                    <h6 className="text-xl bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text text-transparent font-semibold mr-45 md:mr-4 mb-2">
                      SOCIAL MEDIAS
                    </h6>
                  </th>
                  <td>
                    <ul className="space-y-3">
                      <li className="opacity-100 transform-none">
                        <div className="link-wrapper">
                          <div className="link">
                            <a
                              href="https://wa.link/lkc3u6"
                              target="_blank"
                              rel="noreferrer"
                              className="flex flex-row gap-2 hover:underline text-base md:text-lg block"
                            >
                              <ChatDots /> WhatsApp
                            </a>
                          </div>
                          <div className="link-underline transform -translate-x-full translate-z-0"></div>
                        </div>
                      </li>
                      {/* <li className="opacity-100 transform-none">
                        <div className="link-wrapper">
                          <div className="link">
                            <a
                              href="https://www.behance.net/itssharlee"
                              target="_blank"
                              rel="noreferrer"
                              className="flex flex-row gpa-2 hover:underline text-base md:text-lg block"
                            >
                              <BrandFacebookSolid/> Facebook
                            </a>
                          </div>
                          <div className="link-underline transform -translate-x-full translate-z-0"></div>
                        </div>
                      </li> */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

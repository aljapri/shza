import React from 'react';

import './header.css';
import Image from 'next/image';
import breakFast from "../../public/image/breakfast.jpg";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <Image src={breakFast} width={1000} height={400} alt="image" />
    </div>
  </div>
);

export default Header;

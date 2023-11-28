import React from 'react';
import './styling.css';

function Faq() {
  return (
    <div className="container">
      <h1 className='text-white'>Frequently asked questions?</h1>
      <div className="tab">
        <input type="radio" name="acc" id="acc1" />
        <label htmlFor="acc1">
          <h2>01</h2>
          <h3>What is RaiseWise and how does it work?</h3>
        </label>
        <div className="content">
          <p>RaiseWise is a decentralized crowdfunding platform powered by the cutting-edge technology of blockchain. This platform is designed to provide an innovative and secure solution for founders with financial restrictions to raise capital for their ventures. The platform utilizes blockchain technology to enable a transparent and secure crowdfunding process.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc2" />
        <label htmlFor="acc2">
          <h2>02</h2>
          <h3>How is cryptocurrency used in this platform?</h3>
        </label>
        <div className="content">
          <p>Cryptocurrency serves as the primary fundraising mechanism for the project. Participants in the crowdfunding campaign send cryptocurrency to the project's designated wallet address. In return, they receive the project's tokens, typically at a predefined exchange rate.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc3" />
        <label htmlFor="acc3">
          <h2>03</h2>
          <h3>How is user data protected?</h3>
        </label>
        <div className="content">
          <p>RaiseWise requires users to login to their MetaMask wallets to participate in the token sale. Private keys and sensitive data stored locally in MetaMask are encrypted using strong encryption algorithms. This encryption helps protect the data from unauthorized access even if the user's device is compromised.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc4" />
        <label htmlFor="acc4">
          <h2>04</h2>
          <h3>What are the different types of tokens that can be used?</h3>
        </label>
        <div className="content">
          <p>There are six types of crypto tokens - transactional, governance, utility, security, platform, and non-fungible tokens. On RaiseWise, users can create and invest in different types of tokens, depending on the project's goals, the blockchain platform they are using, and the specific use case of the token.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc5" />
        <label htmlFor="acc5">
          <h2>05</h2>
          <h3>What is the role of smart contracts in RaiseWise?</h3>
        </label>
        <div className="content">
          <p>Smart contracts play a crucial role by automating the execution and enforcement of agreements between project creators and backers. They ensure transparency, security, and efficiency in the crowdfunding process. Smart contracts used for token sales are undergone security audits to identify vulnerabilities that could pose risks to investors.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc6" />
        <label htmlFor="acc6">
          <h2>06</h2>
          <h3>What fees is associated with using RaiseWise?</h3>
        </label>
        <div className="content">
          <p>RaiseWise is a decentralized crypto-based crowdfunding platform powered by the cutting-edge technology of blockchain. This platform is designed to provide an innovative and secure solution for founders with financial restrictions to raise capital for their ventures. The platform utilizes blockchain technology to enable a transparent and secure crowdfunding process.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc7" />
        <label htmlFor="acc7">
          <h2>07</h2>
          <h3>What are the tax implications of using RaiseWise?</h3>
        </label>
        <div className="content">
          <p>RaiseWise is a decentralized crypto-based crowdfunding platform powered by the cutting-edge technology of blockchain. This platform is designed to provide an innovative and secure solution for founders with financial restrictions to raise capital for their ventures. The platform utilizes blockchain technology to enable a transparent and secure crowdfunding process.</p>
        </div>
      </div>
      <div className="tab">
        <input type="radio" name="acc" id="acc8" />
        <label htmlFor="acc8">
          <h2>08</h2>
          <h3>How can users contact customer support for assistance?</h3>
        </label>
        <div className="content">
          <p>RaiseWise is a decentralized crypto-based crowdfunding platform powered by the cutting-edge technology of blockchain. This platform is designed to provide an innovative and secure solution for founders with financial restrictions to raise capital for their ventures. The platform utilizes blockchain technology to enable a transparent and secure crowdfunding process.</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;

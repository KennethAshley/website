import React from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import logo_light from '@images/logo_light.svg';
import heroIllustration from '@images/whitepaper/hero_illustration.svg';
import { device, size } from '@src/breakpoints';

export const SectionWrapper = styled.section`
  padding: 100px;
  background: #181e26;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    padding: 100px 30px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    padding: 70px 20px;
  }

  @media ${device.tablet} and (max-width: ${size.laptop}) {
    padding: 70px 100px;
  }

  .img {
    width: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 100;
    margin-top: 40px;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 100;
    color: #00e2c1;
    margin-bottom: 40px;
  }
`;
class Banner extends React.Component {
  render() {
    return (
      <SectionWrapper>
        <img
          className="img"
          src={logo_light}
          alt="MARKET Protocol white paper"
        />
        <h3>Powering safe, solvent & trustless trading of any asset</h3>
        <p>April 2018</p>
        <Row type="flex" justify="center">
          <img
            style={{
              height: '1%',
              width: '10rem'
            }}
            src={heroIllustration}
            alt="MARKET Protocol Ethereum derivatives trading"
          />
        </Row>
      </SectionWrapper>
    );
  }
}

export default Banner;

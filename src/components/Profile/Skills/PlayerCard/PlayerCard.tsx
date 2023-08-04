import { Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export interface FutPlayerCardProps {
  rating: number;
  position: string;
  name: string;
  statsLeft: Array<{ value: number; label: string }>;
  statsRight: Array<{ value: number; label: string }>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 400px;
`;

const FutPlayerCard = styled.div`
  position: relative;
  width: 235px;
  height: 380px;
  aspect-ratio: 99 / 160;
  background-image: url(/img/card_bg.png);
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 3.8rem 0;
  z-index: 2;
  transition: 200ms ease-in;
`;

const PlayerCardTop = styled.div`
  position: relative;
  display: flex;
  color: #423000;
  padding: 0 1.5rem;
`;

const PlayerMasterInfo = styled.div`
  position: absolute;
  line-height: 2.2rem;
  font-weight: 300;
  padding: 0;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PlayerRating = styled.div`
  font-size: 36px;
  line-height: 15px;
  font-weight: 400;
  text-align: center;
`;

const PlayerPosition = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const PlayerNation = styled.div`
  display: block;
  width: 3rem;
  height: 25px;
  margin: 0.3rem 0;
`;

const PlayerNationImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;

const PlayerClub = styled.div`
  display: block;
  width: 3.1rem;
  height: 40px;
`;

const PlayerClubImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
`;

const PlayerPicture = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

const PlayerPictureImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
  position: relative;
  right: -21px;
  bottom: 12px;
`;

const PlayerFeaturesCol = styled.div`
  border-right: 2px solid rgba(66, 48, 0, 0.1);
  padding: 0 2.3rem;
  font-size: 22px;
`;

const PlayerFeaturesColRight = styled(PlayerFeaturesCol)`
  border-right: none;
`;

const PlayerFeaturesSpan = styled.span`
  display: flex;
  line-height: 24px;
`;

const PlayerFeatureValue = styled.div`
  margin-right: 0.3rem;
  font-weight: 400;
`;

const PlayerFeatureTitle = styled.div`
  font-weight: 300;
`;

const PlayerCardBottom = styled.div`
  position: relative;
`;

const PlayerInfo = styled.div`
  display: block;
  padding: 0;
  color: #423000;
  width: 90%;
  margin: 0 auto;
  height: auto;
  position: relative;
  z-index: 2;
`;

const PlayerName = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  font-size: 1.6rem;
  border-bottom: 2px solid rgba(66, 48, 0, 0.1);
  padding-bottom: 0.3rem;
  overflow: hidden;
`;

const PlayerNameSpan = styled.span`
  display: block;
  font-weight: 400;
  font-size: 35px;
  line-height: 29px;
`;

const PlayerFeatures = styled.div`
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
`;

const FutPlayerCardComponent = ({
  rating,
  position,
  name,
  statsLeft,
  statsRight,
}: FutPlayerCardProps) => {
  return (
    <Wrapper className="font-dinCon">
      <Text fontSize={"3rem"} fontWeight={400}>
        {name}
      </Text>
      <FutPlayerCard>
        <PlayerCardTop>
          <PlayerMasterInfo>
            <PlayerRating>
              <span>{rating}</span>
            </PlayerRating>
            <PlayerPosition>
              <span>{position}</span>
            </PlayerPosition>
            <PlayerNation>
              <PlayerNationImage
                src="/img/logos/eng.svg"
                alt="England"
                draggable="false"
              />
            </PlayerNation>
            <PlayerClub>
              <PlayerClubImage
                src="/img/logos/efc.svg"
                alt="Everton"
                draggable="false"
              />
            </PlayerClub>
          </PlayerMasterInfo>
          <PlayerPicture>
            <PlayerPictureImage
              src="/img/fut1.png"
              alt="McKelvie"
              draggable="false"
            />
          </PlayerPicture>
        </PlayerCardTop>
        <PlayerCardBottom>
          <PlayerInfo>
            <PlayerName>
              <PlayerNameSpan>{name}</PlayerNameSpan>
            </PlayerName>
            <PlayerFeatures>
              <PlayerFeaturesCol>
                {statsLeft.map((stat, index) => (
                  <PlayerFeaturesSpan key={index}>
                    <PlayerFeatureValue>{stat.value}</PlayerFeatureValue>
                    <PlayerFeatureTitle>{stat.label}</PlayerFeatureTitle>
                  </PlayerFeaturesSpan>
                ))}
              </PlayerFeaturesCol>
              <PlayerFeaturesColRight>
                {statsRight.map((stat, index) => (
                  <PlayerFeaturesSpan key={index}>
                    <PlayerFeatureValue>{stat.value}</PlayerFeatureValue>
                    <PlayerFeatureTitle>{stat.label}</PlayerFeatureTitle>
                  </PlayerFeaturesSpan>
                ))}
              </PlayerFeaturesColRight>
            </PlayerFeatures>
          </PlayerInfo>
        </PlayerCardBottom>
      </FutPlayerCard>
      <Text fontSize={"2rem"} fontWeight={300} textTransform={"uppercase"}>
        Gold Rare
      </Text>
    </Wrapper>
  );
};

export default FutPlayerCardComponent;

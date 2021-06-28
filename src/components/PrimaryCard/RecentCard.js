import moment from "moment";
import { CgProfile as Profile } from "react-icons/cg";
import { AiOutlineClockCircle as Time } from "react-icons/ai";
import LazyLoad from "react-lazyload";
import data from "../data/cardData";
import {
  Body, Image, ImgDiv, ContentDiv, Heading, SubHeading, Btn, LeftSection, RightSection, Description,
} from "./styles";
//image
import bannerImg from "../../images/blogs/recent.webp";

function RecentCard() {
  return (
    <Body>
      <LazyLoad once>
        <ImgDiv>
          <Image src={bannerImg} alt="banner-img" />
        </ImgDiv>
      </LazyLoad>
      <ContentDiv>
        <Heading>{data[0].title}</Heading>
        <SubHeading>
          <LeftSection><Profile />  {data[0].author}</LeftSection>
          <RightSection><Time /> {moment(data[0].date).format("LL")}</RightSection>
        </SubHeading>
        <Description>
          {data[0].desc}
        </Description>
        <Btn className="signin ui inverted blue button mini" to={data[0].url}>
          Read More
        </Btn>
      </ContentDiv>
    </Body>
  );
}
export default RecentCard;

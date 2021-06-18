/* eslint-disable */
import { useState, useEffect } from "react";
//?Twitter
import Pagination from "../../Pagination/Pagination";
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import Footer from "../../Footer/Footer";
//?Sidebar
import Sidebar from "../../Sidebar/Sidebar";
//?Styles
import {
  Container, Left, Mid, OtherBlogComponent, RecentBlogComponent, Right, TwitterComponent, SidebarComponent, FooterDiv, NavBarDiv, SponsorImage, SponsorImgDiv
} from "./Style";
import Posts from "../../Posts/Posts";
//navbar
import Navbar from "../../Navbar/Navbar";
//footer
import Footer from "../../Footer/Footer";
//card data
import cardData from "../../data/cardData";
import RecentBlog from "../../PrimaryCard/RecentCard";
//adv
import AdComponent from "../../AdComponent/AdComponent";
function Home() {
  //?--------Pagination--------
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    setPosts(cardData);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //?---------------------- 
  return (
    <Container>
      <NavBarDiv>
        <Navbar />
      </NavBarDiv>
      <Left>
        <SidebarComponent>
          <Sidebar />
        </SidebarComponent>
      </Left>
      <Mid>
        <RecentBlogComponent>
          <RecentBlog />
        </RecentBlogComponent>
        <AdComponent />
        <OtherBlogComponent>
          <Posts cardData={currentPosts} loading={loading} />
        </OtherBlogComponent>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </Mid>
      <Right>
        <TwitterComponent>
          <TwitterTimelineEmbed sourceType="profile" screenName="ProjectSakura_" theme="dark" options={{ height: 800 }} />  
        </TwitterComponent>
        <SponsorImgDiv>
          <h2>Sponsored By</h2>
          
          <SponsorImage src="https://projectsakura.xyz/image/spon-white.png" alt="logo" />
        </SponsorImgDiv>
      </Right>

      <FooterDiv>
        <Footer />
      </FooterDiv>
    </Container>
  );
}
export default Home;

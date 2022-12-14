
import JoinGang from "../comp/joinGang/joinGang";
import HeroSection from "../comp/HeroSection/HeroSection"
import NftShowcase from "../comp/NftShowcase/NftShowcase"
import NftCase from "../comp/NftCase/NftCase"
import BlockChainCase from "../comp/BlockchainCase/BlockchainCase"
import Qna from "../comp/qna/qna";
import NewsLetter from "../comp/newsLetter/newsLetter";
import Roadmap from "../comp/Roadmap/Roadmap";
import Footer from "../comp/footer/footer";
const Home = () => {
    return (
        <div>
            <HeroSection style={{ marginBottom: "50px" }} ></HeroSection>
           
            <NftShowcase></NftShowcase>
            <div className="MainQnaContainer" >
                <Qna></Qna>
            </div>
          
            <iframe className={"mainVideo"} height="500px" style={{ marginTop: "50px" }} src="https://www.youtube.com/embed/tJReogx1pv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <Footer></Footer>
            {/*
            <NftCase></NftCase>
            <BlockChainCase></BlockChainCase>
            */}

            
        </div>
    )
}

export default Home;

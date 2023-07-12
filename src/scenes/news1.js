import React from "react";
import { useGetcryptoNewsApiQuery } from "../services/cryptonewsApi";
import NewsCard from "../components/newscard";

const NewsPage = () => {
  const { data, isFetching } = useGetcryptoNewsApiQuery("CryptoCurrency");

  if (isFetching) return "Loading . . .";

  const news = data?.value[0];
  const newsImage =
    news?.image?.thumbnail?.contentUrl ||
    "https://cdn3.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1421034/original/Top-Cryptocurrency-News-Today-1200x1200.jpg";
  const providerImage =
    news?.provider[0]?.image?.thumbnail?.contentUrl || "Amit.Saha ";
  const providerName = news?.provider[0]?.name || "Unknown Provider";
  const newsName =
    news?.name ||
    "Indian Government Raids Director of Crypto Exchange WazirX, Freezes $8.1M";
  const newsDescription =
    news?.description ||
    "Get latest Cryptocurrency News updates on daily basis. Get to know about latest crypto prices, IDO, IEO, Crypto exchanges news, Crypto regulations & govt etc only at DesiDIme";

  return (
    <div className="newssection flexcolumn">
      <div className="newsherosection flexrow">
        <img src={newsImage} alt="News" className="mainnewsimg" />
        <div className="flexcolumn">
          <div className="flexrow2">
            <img src={providerImage} alt="Provider" className="icon2" />
            <p>{providerName}</p>
          </div>
          <h1 className="padding">{newsName}</h1>
          <p className="padding">{newsDescription}</p>
        </div>
      </div>
      <h2 className="padding2">Latest News</h2>
      <div className="newscard">
        {data?.value.slice(1).map((data, index) => (
          <NewsCard news={data} index={index + 1} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;

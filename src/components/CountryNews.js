import useFetch from "../hooks/useFetch";

function CountryNews(props) {
    const id = props.id.toLowerCase();
    const {data:news} = useFetch(`https://newsapi.org/v2/top-headlines?country=${id}&apiKey=7c71c21ad61a4e32be66976ae08f8dfd`);

    if(news) {
        console.log(news);
    }

    return (
        <>
            {news && <>
                <div className="news-container">
                    {news.articles.slice(0, 5).map((newsItem, index) => {
                        	return <div className="news-item" key={index}>
                                <span>Author: {newsItem.author}</span>
                                <a href={newsItem.url} target="_blank">
                                    <span className="news-title">{newsItem.title}</span>
                                </a>
                                <span>Published at: {newsItem.publishedAt.replace(/[zt]/gi, ' ')}</span>
                            </div>
                    })}
                </div>
            </>}
        </>
    );
}

export default CountryNews;
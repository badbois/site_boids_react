const  Article = ({articles}) => {
    if(articles){
        if(window.innerWidth > 768){
            return (
                <div className="article-list">
                { articles.map( (article) => (

                        <div className="article-preview" key={article.id}>
                            { article.id % 2 === 0 ? (
                                <div className="article">
                                    <div className="text">
                                        <h1>{article.title}</h1>
                                        <p>{article.body}</p>
                                    </div>
                                    <img src={article.image} alt={article.alt} />
                                </div>
                                ) : (
                                <div className="article">
                                    <img src={article.image} alt={article.alt} />
                                    <div className="text">
                                        <h1>{article.title}</h1>
                                        <p>{article.body}</p>
                                    </div>
                                </div>
                                )}
                        </div>
                ))}
                </div>
            );
        }else{
            return (
                <div className="article-list">
                { articles.map( (article) => (

                        <div className="article-preview" key={article.id}>
                            <div className="article">
                                <div className="text">
                                    <h1>{article.title}</h1>
                                    <p>{article.body}</p>
                                </div>
                                <img src={article.image} alt={article.alt} />
                            </div>
                        </div>
                ))}
                </div>
            );
        }
    }
       
}
 
export default Article ;
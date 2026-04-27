from core.config import newsapi

def get_news(news_type: str = "everything", q: str = None, category:str = None, country:str = 'in', language: str = "en", sort_by: str = "relevancy", page_size: int = 20):
    if news_type not in ['headlines', 'everything']:
        return {"error": "Invalid type."}
    
    if page_size < 1:
        page_size = 5

    if page_size > 20:
        page_size = 20
    if news_type == 'headlines':
        response = newsapi.get_top_headlines(category = category or 'general', language = language, country = country, page_size = page_size)
    else:
        response = newsapi.get_everything(q = q or 'technology', language = language, sort_by = sort_by, page_size = page_size)

    if response.get('status') != 'ok':
        return {
            "error": "Failed to fetch news articles.",
            "status": response.get('status')
        }
    
    articles = []
    raw_articles = response.get('articles', [])[:5]
    for article in raw_articles:
        articles.append({
            "title": article.get("title"),
            "description": article.get("description") or "No description available.",
            "url": article.get("url"),
            "source": article.get("source", {}).get("name")
        })
    
    return {
        "count": len(articles),
        "articles": articles
    }
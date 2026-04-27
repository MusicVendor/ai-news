from fastapi import APIRouter
from services.news_services import get_news
from services.ai_services import answer_question as answer_q, summarize_articles
from services.vector_services import find_most_relevant_articles

router = APIRouter()


@router.get("/news")
def fetch_news(
    news_type: str = "everything",
    q: str = None,
    category: str = None,
    country: str = "in",
    language: str = "en",
    sort_by: str = "relevancy",
    page_size: int = 20
):
    return get_news(
        news_type,
        q,
        category,
        country,
        language,
        sort_by,
        page_size
    )


@router.get("/news/summary")
def news_summary(
    news_type: str = "everything",
    q: str = None,
    category: str = None,
    country: str = "in",
    language: str = "en",
    sort_by: str = "relevancy",
    page_size: int = 20
):
    news_response = get_news(
        news_type,
        q,
        category,
        country,
        language,
        sort_by,
        page_size
    )

    articles = news_response.get('articles', [])

    if not articles:
        return {"error": "No articles found to summarize."}

    summarized_text = summarize_articles(articles)

    return {
        "count": len(articles),
        "summary": summarized_text
    }


@router.get("/news/ask")
def ask(
    question: str,
    news_type: str = "everything",
    q: str = None,
    category: str = None,
    country: str = "in",
    language: str = "en",
    sort_by: str = "relevancy",
    page_size: int = 20
):
    news_response = get_news(
        news_type,
        q,
        category,
        country,
        language,
        sort_by,
        page_size
    )

    all_articles = news_response.get('articles', [])
    articles = find_most_relevant_articles(question, all_articles)

    if not articles:
        return {"error": "No articles found to answer the question."}

    answer = answer_q(articles, question)

    return {
        "question": question,
        "answer": answer
    }
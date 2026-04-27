from core.config import client

def summarize_articles(articles):
    combined_text = ""
    
    for article in articles:
        combined_text += f"Title: {article['title']}\n"
        combined_text += f"Description: {article['description']}\n\n"

    prompt  = f"""
    You are a professional news analyst.
    
    Summarize the following news articles

    Guidelines:
    - Each article → 1 to 2 bullet points
    - Focus on key events and important developments
    - Highlight trends and impact
    - Each bullet under 25 words
    - Avoid repetition
    
    News Article:
    {combined_text}
    """
    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=prompt
    )
    return response.text

def answer_question(articles, question):
    combined_text = ""

    for article in articles:
        combined_text += f"Title: {article['title']}\n"
        combined_text += f"Description: {article['description']}\n\n"
    
    prompt = f"""
    You are a professional news analyst.

    Answer the question using ONLY the information from the provided news articles.

    Guidelines:
    - Do NOT use outside knowledge
    - If the answer is not present, say: "Not enough information"
    - Be concise and factual
    - Focus only on relevant details

    News Article:
    {combined_text}

    Question: {question}
    """
    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents=prompt
    )

    return response.text
import json
import sys

def summarize_notebook(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            nb = json.load(f)
        print(f"--- Notebook: {path} ---")
        for i, c in enumerate(nb.get("cells", [])):
            cell_type = c.get("cell_type", "")
            source = "".join(c.get("source", []))
            if cell_type == "markdown":
                print(f"MD [{i}]: {source[:100].strip()}")
            elif cell_type == "code":
                print(f"CODE [{i}]: {source[:100].strip().replace('\n', ' ')}")
    except Exception as e:
        print(f"Error parsing {path}: {e}")

summarize_notebook("d:/Projects/WAD/Facebook/facebook.ipynb")
summarize_notebook("d:/Projects/WAD/WordCloud/wordcloud.ipynb")  # Guessing filename
summarize_notebook("d:/Projects/WAD/WebScrap/flipkart_scraper.py") # From previous conversations, the user made a flipkart scraper

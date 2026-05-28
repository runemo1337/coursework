# import os
# import requests
# import json
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# import uvicorn
# from dotenv import load_dotenv

# load_dotenv()

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class ChatRequest(BaseModel):
#     messages: list
#     temperature: float = 0.7

# CREDENTIALS = os.getenv("VITE_GIGACHAT_CREDENTIALS")
# SCOPE = os.getenv("VITE_GIGACHAT_SCOPE", "GIGACHAT_API_PERS")
# MODEL = os.getenv("VITE_GIGACHAT_MODEL", "GigaChat")

# def get_token():
#     url = "https://ngw.devices.sberbank.ru:9443/api/v2/oauth"
#     headers = {
#         "Authorization": f"Basic {CREDENTIALS}",
#         "RqUID": "12345678-1234-1234-1234-123456789012",
#         "Content-Type": "application/x-www-form-urlencoded"
#     }
#     data = {"scope": SCOPE}
    
#     try:
#         response = requests.post(url, headers=headers, data=data, verify=False)
#         if response.status_code == 200:
#             return response.json().get("access_token")
#         else:
#             print(f"Token error: {response.status_code} - {response.text}")
#             return None
#     except Exception as e:
#         print(f"Token exception: {e}")
#         return None

# @app.post("/chat")
# def chat(request: ChatRequest):
#     token = get_token()
#     if not token:
#         return {"error": "Не удалось получить токен"}
    
#     url = "https://gigachat.devices.sberbank.ru/api/v1/chat/completions"
#     headers = {
#         "Authorization": f"Bearer {token}",
#         "Content-Type": "application/json"
#     }
    
#     payload = {
#         "model": MODEL,
#         "messages": request.messages,
#         "temperature": request.temperature
#     }
    
#     try:
#         response = requests.post(url, headers=headers, json=payload, verify=False)
#         return response.json()
#     except Exception as e:
#         return {"error": str(e)}

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8090)
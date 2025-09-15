
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import json

connect_user = {}
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


@app.websocket("/ws/user_id")
async def web_app(user_id:str, websocket: WebSocket):
    await websocket.accept()
    connect_user[user_id] = websocket
    try:
        while True:
            data = websocket.receive_text()
            for user, user_ws in connect_user.items():
                if user!=user_id:
                    await user_ws.send_text(data)
    
    except:
        del connect_user[user_id]
        await websocket.close()
    

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
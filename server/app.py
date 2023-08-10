import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return jsonify({"hello": "world"})


@app.route("/repos")
def repos():
    user = "po5i"
    res = requests.get(f"https://api.github.com/users/{user}/repox?sort=update")
    user_repos = res.json()
    return jsonify(
        [
            {
                "name": item["name"],
                "description": item["description"],
                "fork": item["fork"],
                "language": item["language"],
            }
            for item in user_repos
        ]
    )


if __name__ == "__main__":
    app.run(debug=True, port=8000)

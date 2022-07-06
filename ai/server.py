from flask import Flask
from flask import request

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")


@app.route("/classification", methods=['POST'])
def classification():
    if request.form.get("title") == "a":
        title = "sdojdoads"
    else:
        title = "なんか入力しろよ"
    return title


if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)

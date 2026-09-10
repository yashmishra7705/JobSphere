from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder="../frontend", static_url_path="")


@app.route("/api/test")
def api_test():
    return jsonify({
        "message": "JobSphere Backend is Working!"
    })


@app.route("/")
def home():
    return send_from_directory("../frontend", "index.html")


@app.route("/register", methods=["POST"])
def register():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    return jsonify({
        "message": "Registration API working!"
    })


if __name__ == "__main__":
    app.run(debug=True)
    
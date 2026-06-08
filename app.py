from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

app = Flask(__name__)

# Gemini Configuration
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate-message", methods=["POST"])
def generate_message():
    try:
        data = request.get_json()

        name = data.get("name", "Anonymous")
        relationship = data.get("relationship", "Fan")
        mood = data.get("mood", "Happy")

        prompt = f"""
Tulis ucapan ulang tahun yang hangat dan tulus untuk Nayla dalam Bahasa Indonesia.

Informasi pengirim:
- Nama: {name}
- Hubungan: {relationship}
- Suasana hati: {mood}

Ketentuan:
- Maksimal 120 kata
- Gunakan Bahasa Indonesia yang natural dan sopan
- Sebutkan ulang tahun Nayla
- Sesuaikan gaya bahasa dengan hubungan pengirim
- Akhiri dengan doa atau harapan baik
- Jangan gunakan bahasa Inggris
"""

        response = model.generate_content(prompt)

        return jsonify({
            "success": True,
            "message": response.text
        })

    except Exception as e:
        print("Gemini Error:", e)

        return jsonify({
            "success": False,
            "message": "Failed to generate birthday message."
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
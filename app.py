from flask import Flask, render_template, request
import agriculture_model  # Your backend script

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.form['data']
    print(f"Received data: {data}")  # Debugging line
    result = agriculture_model.predict(data)  # Use your actual prediction function here
    print(f"Prediction result: {result}")  # Debugging line
    return render_template('result.html', prediction=result)

if __name__ == '__main__':
    app.run(debug=True)

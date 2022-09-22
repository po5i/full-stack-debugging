# Full Stack Debugging <demo>

## Server Set up

Install environment.

```
cd server
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt 
```

Run the application.

```
python app.py
```

The server will be up on http://localhost:5000.

## App Set up

```
cd app
npm install
```

Run the React application.

```
npm start
```

# Debugging methods

- Use PDB on Python
- Use Run and Debug Flask app on VSCODE
    - Create launch.json file
    - Specify CWD
    - Set venv interpreter on vscode
- Use Sources tab and breakpoints on Browser
- Use Run and Debug "Launch Chrome" on VSCODE
    - Change the port to 3000
    - Ensure the app is running on a different shell

# Requirements

Python 3.10
Node 18

# License

[MIT](http://www.opensource.org/licenses/mit-license.html)
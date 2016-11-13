module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
	//"inject": false,
	"angular": false
    },

    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

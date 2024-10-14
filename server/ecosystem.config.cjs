// pm2.config.js
export default {
    apps: [
        {
            name: "express-app-ecom",
            script: "npm start",
            instances: "max",
            exec_mode: "cluster",
            env: {
                NODE_ENV: "development"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ]
};



module.exports = {
    "DB": {
        "Type":"SYS_DATABASE_TYPE",
        "User":"SYS_DATABASE_POSTGRES_USER",
        "Password":"SYS_DATABASE_POSTGRES_PASSWORD",
        "Port":"SYS_SQL_PORT",
        "Host":"SYS_DATABASE_HOST",
        "Database":"SYS_DATABASE_POSTGRES_USER"
    },


    "Redis":
    {
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD"

    },

    "Security":
    {
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD"

    },

    "Mongo":
    {
        "ip":"SYS_MONGO_HOST",
        "port":"SYS_MONGO_PORT",
        "dbname":"SYS_MONGO_DB",
        "password":"SYS_MONGO_PASSWORD",
        "user":"SYS_MONGO_USER"

    },

    "RabbitMQ":
    {
        "ip": "SYS_RABBITMQ_HOST",
        "port": "SYS_RABBITMQ_PORT",
        "user": "SYS_RABBITMQ_USER",
        "password": "SYS_RABBITMQ_PASSWORD"
    },


    "Host":
    {
        "vdomain": "LB_FRONTEND",
        "domain": "HOST_NAME",
        "port": "HOST_DIAMETERCLIENT_PORT",
        "version": "HOST_VERSION"
    },

    "LBServer" : {

        "ip": "LB_FRONTEND",
        "port": "LB_PORT"

    },


    "Services" : {
        "accessToken": "HOST_TOKEN",
        "userServiceHost": "SYS_USERSERVICE_HOST",
        "userServicePort": "SYS_USERSERVICE_PORT",
        "userServiceVersion": "SYS_USERSERVICE_VERSION",

        "walletServiceHost": "SYS_WALLETSERVICE_HOST",
        "walletServicePort":  "SYS_WALLETSERVICE_PORT",
        "walletServiceVersion":  "SYS_WALLETSERVICE_VERSION",

        "relayServiceHost":"SYS_DIAMETERRELAY_HOST",
        "relayServicePort": "SYS_DIAMETERRELAY_PORT"
    }
};

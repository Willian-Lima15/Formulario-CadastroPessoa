const express = require('express')
const consign = require('consign')

module.express = () => {
    const app = express()

    consign()
        .include('controllers')
        .into(app)

    return app
}

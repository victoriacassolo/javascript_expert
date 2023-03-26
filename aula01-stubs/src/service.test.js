const Service = require('./service')
const assert = require('assert')
const { createSandbox } = require('sinon')
const BASE_URL_1 = "https://swapi.dev/api/planets/1"
const BASE_URL_2 = "https://swapi.dev/api/planets/2"

const sinon = createSandbox()
const mocks = {
    alderaan: require('./../mocks/alderaan.json'),
    tatooine: require('./../mocks/tatooine.json'),
}

Service
    ; (async () => {
        // {
        //     //vai para a internet
        //     const service = new Service()
        //     const data = await service.makeRequest(BASE_URL_2)
        //     console.log('dados', JSON.stringify(data))
        // }

        const service = new Service()
        const stub = sinon.stub(
            service,
            service.makeRequest.name
        )

        stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)

        {

        }

    })()
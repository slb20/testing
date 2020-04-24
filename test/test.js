const request = require("supertest");
const app = require("../app.js");

describe("GET",()=>{
    test("must return this is a test part2", async ()=>{
        await request(app).get("/").expect("this is a test part2")
    })
})
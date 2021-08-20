const app = require("../../app");
const request = require("supertest");
const mongoose = require("mongoose");


describe("testing GET /api/todos", () => {
    afterAll((done) => {
        mongoose.connection.close();
        done()
    })
    
    it("should return list of all todos", async () => {
        const res = await request(app).get("/api/todos");
        expect(res.body).toBeDefined()
        expect(res.body.length).toBeDefined()
        expect(res.body.length).toBeGreaterThanOrEqual(0);
    })
})
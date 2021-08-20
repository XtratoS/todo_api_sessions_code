const {validationService} = require("../../services/index")

describe("testing validation service functions", () => {
    it("should not return any errors", () => {
        const {error} = validationService.validateTodo({title: "Title", description: "description"});
        expect(error).toBeFalsy();
    });

    it("should return an error about title", () =>{
        const {error} = validationService.validateTodo({description: "description"});
        expect(error).toBeTruthy();
        expect(error.details.length).toBe(1);
    })

    it("should return an error about descrtiption", () =>{
        const {error} = validationService.validateTodo({title: "title"});
        expect(error).toBeTruthy();
        expect(error.details.length).toBe(1);
    })
})
import prototype from "../lib/prototype-decorator";
import { expect } from "chai";


describe("prototype-decorator", function() {
  it("it should work", function(done) {
    @prototype({ x: "it works!!" })
    class Tester {
      constructor() {
        expect(this.x).to.equal("it works!!");
        done();
      }
    }

    new Tester();
  });

  it("it should work with parent", function(done) {
    class ParentTester {
      constructor() {
        expect(this.x).to.equal("it works!!");
        done();
      }
    }

    @prototype({ x: "it works!!" })
    class Tester extends ParentTester {
    }

    new Tester();
  });

  it("it should throw if it's override exiting preperty of prototype", function() {
    expect(() => {
      class ParentTester {
        x() {}
      }

      @prototype({ x: "this time it should not work" })
      class Tester extends ParentTester {}

      new Tester();
    }).to.throw(Error);
  });
});

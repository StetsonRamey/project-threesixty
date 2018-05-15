const expect = require('chai').expect;

let jobTotal = (paint, woodRot) => {
    return paint+woodRot;
}

let pmCost = (jobTotal) => {
    return jobTotal * 0.05;
}

let profitMargin = (paintCost, woodRot, labor) => {
    let jobTotal = paintCost+woodRot;
    let profit = jobTotal - labor;
    return profit / jobTotal;
}

describe('Calculations', () => {
    it('Should Calculate Job Total', () => {
        expect(jobTotal(100,100)).to.equal(200);
    });
    it('Should Calcualte PM Cost', () => {
        expect(pmCost(200)).to.equal(10);
    });
    it('Should Calculate Profit Margin', () => {
        expect(profitMargin(300,100,100)).to.equal(0.75);
    });
});